const jwt = require("jsonwebtoken");
const config = require("../config/authconfig");

const generateToken = (email) => {
  const packet = { email };
  return jwt.sign(packet, config.secret, { expiresIn: "3600s" }); // 1 óra
};

module.exports = { generateToken };
