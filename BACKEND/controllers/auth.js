var express = require("express");
var router = express.Router();
var cors = require("cors");
const fs = require("fs");
const path = require("path");
var DB = require("../database/dboperations");
const authJwt = require("../middleware/authjwt");
var authUtils = require("../utils/authUtils");
const crypto = require("crypto");
const stripe = require("stripe")("sk_test_51OqjCM01VYY1Q06qZfwWtRUeaK7MLymRQpNnkBNiUferRL3QYxJMYJKLByKSzsBfIPoslTYtoH0KnJBkQwywdqWZ003w8byPBd")


router.use(cors);

// User
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

router.get("/userprofile", [authJwt.verifyToken], (req, res) => {
  DB.getUserProfile(req.userParams.email)
    .then((adat) => res.json(adat))
    .catch((error) => res.send(error));
});

router.post("/register", (req, res) => {
  const { name, email, password, phone } = req.body;
  DB.createUser(name, email, password, phone)
    .then((adat) => res.json(adat))
    .catch((error) => {
      if (error.code === "ER_DUP_ENTRY") {
        res.status(409).json({ error: "Az e-mail cím már regisztrálva van." });
      } else {
        res.status(500).json({ error: "Szerverhiba történt." });
      }
    });
});

// GET /validEmailList.txt - Az email listát tartalmazó fájl elérése
router.get("/validemaillist", (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "validEmailList.txt");

  // Fájl olvasása
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Ha hiba történik az olvasás közben, 500-as hibaüzenetet küldünk
      console.error(err);
      res.status(500).send("Hiba történt a fájl olvasása közben.");
      return;
    }

    // Sikeres olvasás esetén elküldjük a fájl tartalmát a válaszban
    res.send(data);
  });
});

// Az OTP generálása a /otp útvonalon
function generateOTP() {
  return new Promise((resolve, reject) => {
    const otpBytes = crypto.randomBytes(3); // 3 bájtsorozat generálása
    const numericOTP = parseInt(otpBytes.toString("hex"), 16)
      .toString()
      .substr(0, 6); // Az OTP decimális stringgé alakítása
    const formattedOTP = numericOTP.padStart(6, "0"); // Az OTP kiegészítése nullákkal az 6 jegyű számként való reprezentációhoz
    resolve(formattedOTP);
  });
}

router.get("/otp", (req, res) => {
  generateOTP()
    .then((otp) => res.json({ otp }))
    .catch((error) => res.status(500).json({ error: error.message }));
});

router.post("/create-checkout-session", async (req, res) => {
    try {
        const { cart } = req.body;

        // Check if cart is empty
        if (!cart || cart.length === 0) {
            return res.status(400).json({ error: "Cart is empty" });
        }

        const lineItems = cart.map((item) => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.product.watchName,
                    },
                    unit_amount: Math.round(item.product.price * 100), // Convert to cents
                },
                quantity: item.quantity,
            };
        });

        console.log("x")

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:3000/home",
            cancel_url: "http://localhost:3000/cart", // Redirect to cart if payment is canceled
        });

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
