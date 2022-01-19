const { body } = require("express-validator");

module.exports = [
   body("email")
      .not()
      .isEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Please provide a valid email"),

   body("password").not().isEmpty().withMessage("Password is required"),
];
