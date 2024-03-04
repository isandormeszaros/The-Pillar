var express = require("express");
var router = express.Router();
const fs = require('fs');
const path = require('path');
var DB = require("../database/dboperations");
const authJwt = require("../middleware/authjwt");
var authUtils = require("../utils/authUtils");
const crypto = require("crypto");

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
router.get('/validemaillist', (req, res) => {
  const filePath = path.join(__dirname, '..', 'public', 'validEmailList.txt');

  // Fájl olvasása
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Ha hiba történik az olvasás közben, 500-as hibaüzenetet küldünk
      console.error(err);
      res.status(500).send('Hiba történt a fájl olvasása közben.');
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
    const numericOTP = parseInt(otpBytes.toString('hex'), 16).toString().substr(0, 6); // Az OTP decimális stringgé alakítása
    const formattedOTP = numericOTP.padStart(6, '0'); // Az OTP kiegészítése nullákkal az 6 jegyű számként való reprezentációhoz
    resolve(formattedOTP);
  });
}

router.get("/otp", (req, res) => {
  generateOTP()
    .then((otp) => res.json({ otp })) 
    .catch((error) => res.status(500).json({ error: error.message }));
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
