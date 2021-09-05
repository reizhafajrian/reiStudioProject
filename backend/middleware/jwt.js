import jwt from "jsonwebtoken";
const generateToken = (user) => {
  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
  return token;
};
const verifyToken = (token) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return false;
    return decoded;
  });
};
module.exports = {
  generateToken,
  verifyToken,
};
