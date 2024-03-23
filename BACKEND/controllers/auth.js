var express = require("express");
var router = express.Router();
var cors = require("cors");
var DB = require("../database/dboperations");
const authJwt = require("../middleware/authjwt");
var authUtils = require("../utils/authUtils");
const crypto = require("crypto");
const stripe = require("stripe")(
  "sk_test_51OqjCM01VYY1Q06qZfwWtRUeaK7MLymRQpNnkBNiUferRL3QYxJMYJKLByKSzsBfIPoslTYtoH0KnJBkQwywdqWZ003w8byPBd"
);

router.use(cors());

// Login to existing account
router.post("/login", function (req, res, next) {
  DB.getSignIn(req.body.email, req.body.password)
    .then((data) => data[0])
    .then((data) => {
      console.log(data);
      const { userEmail, role } = data;
      const token = authUtils.generateToken(userEmail, role);

      res.status(200).json({
        data: data,
        token: token,
      });
    })
    .catch((error) => res.status(404).send(error));
});

// Get data about the profile
router.get("/userprofile", [authJwt.verifyToken], (req, res) => {
  DB.getUserProfile(req.userParams.email)
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
    const { cart, couponCode, formData } = req.body;

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

    console.log(formData)
    // formData.push({})

    const shippingRate = await stripe.shippingRates.retrieve(
      "shr_1OxQHT01VYY1Q06qjJQ7b6cC"
    );

    const taxRate = await stripe.taxRates.retrieve("txr_1OxPwc01VYY1Q06qWha8JHA5");


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
      // shipping_address: {
      //   line1: formData.address,
      // },
      automatic_tax: {
        enabled: true,
      },
      discounts: discounts,
      success_url: "http://localhost:3000/checkout/succeed",
      cancel_url: "http://localhost:3000/checkout/failed",
    });

    console.log(taxRate);
    console.log("Shipping:", shippingRate);
    console.log("Discounts applied:", discounts);
    console.log("Coupon:", couponCode);

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Internal server error" });
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
