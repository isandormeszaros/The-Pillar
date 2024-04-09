var express = require("express");
var router = express.Router();
var cors = require("cors");
var DB = require("../database/dboperations");
const authJwt = require("../middleware/authjwt");
var authUtils = require("../utils/authUtils");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const jwt = require('jsonwebtoken');
const { secret } = require('../config/authconfig');
const stripe = require("stripe")(
  "sk_test_51OqjCM01VYY1Q06qZfwWtRUeaK7MLymRQpNnkBNiUferRL3QYxJMYJKLByKSzsBfIPoslTYtoH0KnJBkQwywdqWZ003w8byPBd"
);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());

// Login to existing account
router.post("/login", function (req, res, next) {
  DB.getSignIn(req.body.email, req.body.password)
    .then((data) => data[0])
    .then((data) => {
      const { id, userEmail } = data;
      console.log(data)
      const token = authUtils.generateToken(id, userEmail);
      res.status(200).json({
        data: data,
        token: token,
      });
      console.log(token);
    })
    .catch((error) => res.status(404).send(error));
});

// Get data about the profile
router.get("/userprofile", [authJwt.verifyToken], (req, res) => {
  DB.getUserProfile(req.userParams.id)
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

// Register a new user
router.post("/register", (req, res) => {
  const { name, email, password, phone } = req.body;
  DB.createUser(name, email, password, phone)
    .then((data) => res.json(data))
    .catch((error) => {
      if (error.code === "ER_DUP_ENTRY") {
        res.status(409).json({ error: "Az e-mail cím már regisztrálva van." });
      } else {
        res.status(500).json({ error: "Szerverhiba történt." });
      }
    });
});

// Delete account
router.delete("/delete/:id", (req, res) => {
  const userId = req.params.id;

  DB.deleteUser(userId)
    .then((data) => {
      if (data.affectedRows == 0)
        res.status(404).send("Nincs ilyen rekord: " + userId);
      else return res.json(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

// Modify account
router.patch("/patch/:id", (req, res) => {
  const id = req.params.id;
  const userData = req.body;

  if (!userData || Object.keys(userData).length === 0) {
    res.status(400).send("Nincs updatelhető mező");
    console.log(userData);
  } else {
    DB.patchUser(id, userData)
      .then((affectedRows) => {
        if (affectedRows === 0) {
          res.status(404).send("Ez az id nem létezik: " + id);
        } else {
          res.json({ success: true });
        }
      })
      .catch((error) => {
        console.error("Hiba a felhasználói adatok módosítása közben:", error);
        res.status(500).send("Hiba a felhasználó módosításakor");
      });
  }
});

// Validation - check email exist in the database
router.get("/validemail", (req, res) => {
  const email = req.body.email;

  DB.getEmail(email)
    .then((data) => res.json(data))
    .catch((error) => res.send(error));
});

// Generate a new OTP
function generateOTP() {
  return new Promise((resolve, reject) => {
    const otpBytes = crypto.randomBytes(3);
    const numericOTP = parseInt(otpBytes.toString("hex"), 16)
      .toString()
      .substr(0, 6);
    const formattedOTP = numericOTP.padStart(6, "0");
    resolve(formattedOTP);
  });
}

// Get the OTP
router.get("/otp", (req, res) => {
  generateOTP()
    .then((otp) => res.json({ otp }))
    .catch((error) => res.status(500).json({ error: error.message }));
});

// Stripe payment - redirect to checkout
router.post("/create-checkout-session", async (req, res) => {
  try {
    const { cart, couponCode, userData } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    let discounts = [];
    if (couponCode) {
      const coupon = await stripe.coupons.retrieve(couponCode);
      if (!coupon) {
        return res.status(400).json({ error: "Invalid coupon code" });
      } else {
        discounts.push({ coupon: couponCode });
      }
    }

    console.log(userData);

    const shippingRate = await stripe.shippingRates.retrieve(
      "shr_1OxQHT01VYY1Q06qjJQ7b6cC"
    );

    const taxRate = await stripe.taxRates.retrieve(
      "txr_1OxPwc01VYY1Q06qWha8JHA5"
    );

    const lineItems = cart.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.product.watchName,
          },
          unit_amount: Math.round(item.product.price * 100),
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      customer_email: userData.userEmail,
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["HU"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: shippingRate.type,
            fixed_amount: shippingRate.fixed_amount,
            display_name: shippingRate.display_name,
            delivery_estimate: {
              minimum: shippingRate.delivery_estimate.minimum,
              maximum: shippingRate.delivery_estimate.maximum,
            },
          },
        },
      ],
      automatic_tax: {
        enabled: true,
      },
      discounts: discounts,
      success_url:
        "http://localhost:3000/auth/checkout/succeed?true&session_id={CHECKOUT_SESSION_ID}",
      cancel_url:
        "http://localhost:3000/auth/checkout/failed?session_id={CHECKOUT_SESSION_ID}",
    });

    console.log(taxRate);
    console.log("Shipping:", shippingRate);
    console.log("Discounts applied:", discounts);
    console.log("Coupon:", couponCode);

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ Error: "Internal server error" });
  }
});

router.get("/checkout/succeed", async (req, res) => {
  try {
    const sessionId = req.query.session_id;

    console.log("Random " + sessionId);

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    console.log(lineItems);
    res.json({ data: session, lineItems: lineItems.data });
  } catch (error) {
    console.error("Error retrieving checkout session:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST /auth/orders - Place an order
router.post("/orders", (req, res) => {
  const header = req.body.header;
  const body = req.body.body;

  DB.placeOrder(header, body)
    .then((result) => {
      res.json({
        success: true,
        message: "Megrendelés sikeresen rögzítve",
        orderId: result,
      });
    })
    .catch((error) => {
      console.error("Hiba a megrendelés rögzítése közben:", error);
      res.status(500).json({
        success: false,
        error: "Hiba a megrendelés rögzítése közben",
        error,
      });
    });
});

// GET /auth/orders/all - Place an order
router.get("/orders/all", [authJwt.verifyToken], async (req, res) => {
  try {
    let token = req.headers["x-access-token"];
    const decodedToken = jwt.verify(token, secret);
    const userId = decodedToken.id;
    const data = await DB.getAllOrders(userId);
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


router.get(
  "/test",
  authJwt.verifyToken, //pl: megrendelés
  (req, res) => {
    res.send(req.userParams);
  }
);

router.get(
  "/testAdmin",
  authJwt.verifyAdmin, //pl: admin funkciók
  (req, res) => {
    res.send(req.userParams);
  }
);

module.exports = router;
