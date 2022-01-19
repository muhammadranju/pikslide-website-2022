const express = require("express");
const uploadRoute = express.Router();

const { isAuthenticated } = require("../../middleware/authMiddleware");
const upload = require("../../middleware/uploadMiddleware");

const { uploadProfilePics } = require("../../controllers/uploadControllers");

uploadRoute.post(
   "/profile",
   isAuthenticated,
   upload.single("profilePics"),
   uploadProfilePics
);

module.exports = uploadRoute;
