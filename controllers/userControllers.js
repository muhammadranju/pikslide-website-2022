const userRoute = {};

//Get Request
userRoute.getHome = (req, res, next) => {
   res.redirect("/");
};
userRoute.getProfile = (req, res, next) => {
   res.status(200).render("pages/users/userProfile", {
      title: "Muhammad Ranju - Pikslide",
   });
};

//Get Request
userRoute.getSetting = (req, res, next) => {
   res.status(200).render("pages/users/userSettings", {
      title: "Setting",
   });
};

//Post Request
userRoute.postSetting = (req, res, next) => {
   res.status(200).render("pages/users/userSettings", {
      title: "Setting",
   });
};

//Get Request
userRoute.getSettingEdit = (req, res, next) => {
   res.status(200).render("pages/users/userSettingsEdit", {
      title: "Update Setting",
   });
};

//Post Request
userRoute.postSettingEdit = (req, res, next) => {
   res.status(200).render("pages/users/userSettingsEdit", {
      title: "Update Setting",
   });
};

//Get Request
userRoute.getUpload = async (req, res, next) => {
   return res.status(200).render("pages/users/userProductUpload", {
      title: "Pikslide Submission",
   });
};

//Post Request
userRoute.postUpload = (req, res, next) => {
   res.status(200).render("pages/users/userProductUpload", {
      title: "Pikslide Submission",
   });
};

//Get Request
userRoute.getEditPost = async (req, res, next) => {
   return res.status(200).render("pages/users/userProductEdit", {
      title: "Pikslide Update",
   });
   z;
};

//Post Request
userRoute.postEditPost = (req, res, next) => {
   res.status(200).render("pages/users/userProductEdit", {
      title: "Pikslide Update",
   });
};

//Get Request
userRoute.getDownload = (req, res, next) => {
   res.status(200).render("pages/users/userMyDownloads", {
      title: "Downloads",
   });
};

//Post Request
userRoute.getBookmark = (req, res, next) => {
   res.status(200).render("pages/users/userBookmark", {
      title: "Your Bookmark",
   });
};

//Get Request
userRoute.getSeles = (req, res, next) => {
   res.status(200).render("pages/users/userSales", {
      title: "Seles",
   });
};

//Post Request
userRoute.getEmail = (req, res, next) => {
   res.status(200).render("pages/users/userEmail", {
      title: "Email Setting",
   });
};

//Get Request
userRoute.getBilling = (req, res, next) => {
   res.status(200).render("pages/users/userBilling", {
      title: "Billing",
   });
};

//Post Request
userRoute.getCart = (req, res, next) => {
   res.status(200).render("pages/users/userMycart", {
      title: "My Cart",
   });
};

module.exports = userRoute;
