const express = require('express');
const { login, signUp, sendotp, changePassword } = require('../controllers/Auth');
const { auth } = require('../middlewares/auth');
const { resetPasswordToken } = require('../controllers/ResetPassword');
const router = express.Router();

router.post("/login", login)
router.post("/signup", signUp);
router.post("/sendotp", sendotp);
router.post("/change-password",auth, changePassword);
router.post("/reset-password-token", resetPasswordToken);

module.exports = router;