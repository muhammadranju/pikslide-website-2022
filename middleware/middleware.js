const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");

const { bindUserWithRequiest } = require("./authMiddleware");
const setLocal = require("./setLocals");

const store = new MongoDBStore({
   uri: process.env.MONGOBD_URI || "mongodb://localhost:27017/userDB",
   collection: "sessions",
   expires: 1000 * 60 * 60 * 2,
});

const middlewere = [
   express.static("public"),
   express.urlencoded({ extended: true }),
   express.json(),
   session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      // cookie: { maxAge: 1000 * 60 * 60 * 2 },
      store,
   }),
   bindUserWithRequiest(),
   setLocal(),
   flash(),
];

module.exports = (app) => {
   middlewere.forEach((m) => {
      app.use(m);
   });
};
