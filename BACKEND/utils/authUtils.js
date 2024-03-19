const jwt = require("jsonwebtoken");
const config = require("../config/authconfig");

const generateToken = (email, role) => {
  const packet = { email, role };
  return jwt.sign(packet, config.secret, { expiresIn: "3600s" }); // 1 óra
};

module.exports = { generateToken };
