const authRoute = require("./authRoute/authRoute");
const homeRoute = require("./homeRoute/homeRoute");
const postsRoute = require("./postsRoute/postsRoute");
const usersRoute = require("./usersRoute/usersRoute");
const uploadRoute = require("./uploadRoute/uploadRoute");

const playgroundRoute = require("./playground/playground"); //TODO:Shauld be Remove Needed

const routes = [
   {
      path: "/authentic",
      handler: authRoute,
   },
   {
      path: "/uploads",
      handler: uploadRoute,
   },
   {
      path: "/playground",
      handler: playgroundRoute, //TODO:Shauld be Remove Needed
   },
   {
      path: "/users",
      handler: usersRoute,
   },
   {
      path: "/posts",
      handler: postsRoute,
   },
   {
      path: "/",
      handler: homeRoute,
   },
];

module.exports = (app) => {
   routes.forEach((r) => {
      app.use(r.path, r.handler);
   });
};
