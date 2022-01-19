const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");

const User = require("../models/User");
const errorFormetter = require("../utils/validatonEmailFormetter");
const Flash = require("../utils/Flash");

const authRoutes = {};
authRoutes.home = (req, res) => {
   res.redirect("/");
};

//!Signup Route
authRoutes.signupGetControllers = (req, res, next) => {
   res.status(200).render("pages/auth/signup", {
      title: "Create an account",
      error: {},
      value: "",
   });
};
authRoutes.signupPostControllers = async (req, res, next) => {
   let { username, email, password } = req.body;

   let errors = validationResult(req).formatWith(errorFormetter);
   if (!errors.isEmpty()) {
      return res.status(200).render("pages/auth/signup", {
         title: "Create an account",
         error: errors.mapped(),
         value: {
            username,
            email,
            password,
         },
      });
   }

   try {
      let myUsername_Split = username.split(" ");
      let myUsername_Join = myUsername_Split.join("");
      let myUsername_lower = myUsername_Join.toLocaleLowerCase();

      let myEmail = email.toLocaleLowerCase();

      let hastPassword = await bcrypt.hash(password, 11);
      let user = new User({
         username: myUsername_lower,
         email: myEmail,
         password: hastPassword,
      });
      await user.save();
   } catch (e) {
      console.log(e);
      next(e);
   }

   res.redirect("/authentic/login");
};
//!----------------------------------

//!Login Route
authRoutes.loginGetControllers = (req, res, next) => {
   // console.log(req.session.isLogin, req.session.user);
   res.status(200).render("pages/auth/login", {
      title: "Login",
      error: {},
      value: {},
      flashMessage: Flash.getMessage(req),
   });
};
authRoutes.loginPostControllers = async (req, res, next) => {
   let { email, password } = req.body;

   let errors = validationResult(req).formatWith(errorFormetter);
   if (!errors.isEmpty()) {
      return res.status(200).render("pages/auth/login", {
         title: "Login",
         error: errors.mapped(),
         value: {
            email,
            password,
         },
         flashMessage: Flash.getMessage(req),
      });
   }

   try {
      let user = await User.findOne({ email });
      if (!user) {
         req.flash("success", `Credentials Doesn't Match ! Email/Password`);
         return res.status(200).render("pages/auth/login", {
            title: "Login",
            error: {},
            value: {},
            flashMessage: Flash.getMessage(req),
         });
         // return res.status(500).json({ message: "Invalid Credentials" });
      }
      let passMatch = await bcrypt.compare(password, user.password);
      if (!passMatch) {
         req.flash("success", `Credentials Doesn't Match ! Email/Password`);
         return res.status(200).render("pages/auth/login", {
            title: "Login",
            error: {},
            value: {},
            flashMessage: Flash.getMessage(req),
         });
         // return res.status(500).json({ message: "Invalid Credentials" });
      }

      req.session.isLogin = true;
      req.session.user = user;
      // req.session.save((err) => {
      //    if (err) {
      //       console.log(err);
      //       return next(err);
      //    }
      // });
      return res.redirect("/users/profile");
   } catch (e) {
      console.log(e);
   }
   res.status(200).render("pages/auth/login", {
      title: "Login",
      error: {},
      value: {},
      flashMessage: Flash.getMessage(req),
   });
};
//!----------------------------------

authRoutes.forgotPasswordGetControllers = (req, res, next) => {
   res.status(200).render("pages/auth/recovery/forgotPassword", {
      title: "Forgot Password",
   });
};
authRoutes.forgotPasswordPostControllers = (req, res, next) => {
   res.status(200).render("pages/auth/recovery/forgotPassword", {
      title: "Forgot Password",
   });
};

authRoutes.verifyGetControllers = (req, res, next) => {
   res.status(200).render("pages/auth/recovery/codeVerify", {
      title: "Forgot Password",
   });
};
authRoutes.verifyPostControllers = (req, res, next) => {
   res.status(200).render("pages/auth/recovery/codeVerify", {
      title: "Forgot Password",
   });
};

authRoutes.logoutGetControllers = (req, res, next) => {
   res.status(200).redirect("/authentic/login");
};

module.exports = authRoutes;
