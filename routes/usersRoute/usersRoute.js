const express = require("express");
const usersRoute = express.Router();

const {
   getHome,
   getProfile,
   getSetting,
   postSetting,
   getSettingEdit,
   postSettingEdit,
   getUpload,
   postUpload,
   getEditPost,
   postEditPost,
   getDownload,
   getBookmark,
   getSeles,
   getEmail,
   getBilling,
   getCart,
} = require("../../controllers/userControllers");
const { isAuthenticated } = require("../../middleware/authMiddleware");

usersRoute.get("/", getHome);

usersRoute.get("/profile", getProfile);

usersRoute.get("/setting", isAuthenticated, getSetting);

usersRoute.post("/setting", isAuthenticated, postSetting);

usersRoute.get("/edit", isAuthenticated, getSettingEdit);

usersRoute.post("/edit", isAuthenticated, postSettingEdit);

usersRoute.get("/upload", isAuthenticated, getUpload);

usersRoute.post("/upload", isAuthenticated, postUpload);

usersRoute.get("/edit-post", isAuthenticated, getEditPost);

usersRoute.post("/edit-post", isAuthenticated, postEditPost);

usersRoute.get("/downloads", isAuthenticated, getDownload);

usersRoute.get("/bookmark", isAuthenticated, getBookmark);

usersRoute.get("/sales", isAuthenticated, getSeles);

usersRoute.get("/email_setting", isAuthenticated, getEmail);

usersRoute.get("/billing", isAuthenticated, getBilling);

usersRoute.get("/mycart", isAuthenticated, getCart);

module.exports = usersRoute;
