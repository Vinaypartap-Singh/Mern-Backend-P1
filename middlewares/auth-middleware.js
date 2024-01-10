const jwt = require("jsonwebtoken");
const User = require("../model/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Token Not Provided" });
  }
  const jwtToken = token.replace("Bearer", "").trim();
  console.log(jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, "thisisSecRetTokEnByYViNAy");
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    console.log(userData);

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized access" });
  }
};

module.exports = authMiddleware;
