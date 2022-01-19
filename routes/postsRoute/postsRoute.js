const express = require("express");
const postsRoute = express.Router();

const { getPosts, getProducts } = require("../../controllers/postsControllers");

postsRoute.get("/", getPosts);

postsRoute.get("/products", getProducts);

module.exports = postsRoute;
