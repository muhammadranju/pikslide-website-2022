const homeRoute = require("express").Router();

const {
   getHomaPage,
   getLogoutPage,
   get404PageNotfountPage,
} = require("../../controllers/homeControllers");

homeRoute.get("/", getHomaPage);

homeRoute.get("/logout", getLogoutPage);

homeRoute.use(get404PageNotfountPage);

module.exports = homeRoute;
