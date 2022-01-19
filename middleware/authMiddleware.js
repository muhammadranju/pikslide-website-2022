const User = require("../models/User");

exports.bindUserWithRequiest = () => {
   return async (req, res, next) => {
      if (!req.session.isLogin) {
         return next();
      }
      try {
         let user = await User.findById(req.session.user._id);
         req.user = user;
         next();
      } catch (e) {
         console.log(e);
         next();
      }
   };
};

exports.isAuthenticated = (req, res, next) => {
   if (!req.session.isLogin) {
      return res.redirect("/authentic/login");
   }
   next();
};

exports.isUnAuthenticated = (req, res, next) => {
   if (req.session.isLogin) {
      return res.redirect("/authentic");
   }
   next();
};
