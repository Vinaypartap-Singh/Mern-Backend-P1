const express = require("express");
const router = express.Router();
const {
  home,
  register,
  registerUser,
  loginUser,
  user,
} = require("../controllers/auth-controller");
const validate = require("../middlewares/validate-middlewares");
const { registerSchema, loginSchema } = require("../validators/auth-validator");
const authMiddleware = require("../middlewares/auth-middleware");

// router.get("/", (req, res) => {
//   res.send("Authentication from router folder");
// });

// Optimized Way

router.route("/").get(home);

router
  .route("/register")
  .get(register)
  .post(validate(registerSchema), registerUser);

router.route("/login").post(validate(loginSchema), loginUser);
router.route("/user").get(authMiddleware, user);

module.exports = router;
