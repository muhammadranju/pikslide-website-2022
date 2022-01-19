const { body } = require("express-validator");
const User = require("../../models/User");

module.exports = [
   body("username")
      .isLength({ min: 2, max: 15 })
      .withMessage("Username is required")
      .custom(async (username) => {
         let user = await User.findOne({ username });
         if (user) {
            return Promise.reject("Username already taken");
         }
      })
      .trim(),

   body("email")
      .not()
      .isEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please provide a valid email")
      .custom(async (email) => {
         let user = await User.findOne({ email });
         if (user) {
            return Promise.reject("This email already exists");
         }
      })
      .normalizeEmail(),

   body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be 8-16 characters"),

   body("confirmPassword")
      .isLength({ min: 8 })
      .withMessage("Confirm password is required")
      .custom((confirmPassword, { req }) => {
         if (confirmPassword !== req.body.password) {
            throw new Error("Confirm password does not match");
         }
         return true;
      }),
];
