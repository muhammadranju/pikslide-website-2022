require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const config = require("config");

const setMiddlewere = require("./middleware/middlewere");
const setRoutes = require("./routes/routes");
const app = express();

//Setup view engine
app.set("view engine", "ejs");
app.set("views", "views");

console.log(config.get("name"));

if (app.get("env") === "development") {
   app.use(morgan("dev"));
}

setMiddlewere(app); //Useing Middleware from Middleware Folder

setRoutes(app); //Useing Routes from Routes Folder

app.use((req, res, next) => {
   let error = new Error("404 Page Not Found");
   error.status = 404;
   next(error);
});
app.use((error, req, res, next) => {
   if (error.status === 404) {
      return res.status(404).render("pages/errorPage/404Error", {
         title: "404 - Unlimited Templates, Themes and More",
      });
   }
   res.status(500).render("pages/errorPage/500Error", {
      title: "500 - Internal Server Error",
   });
});

mongoose // Mongodb datadase connection
   .connect(
      config.get(
         "mongodb+srv://Ranju:ranju123@cluster0.jzvet.mongodb.net/userDB?retryWrites=true&w=majority"
      ) || "mongodb://localhost:27017/userDB",
      {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      }
   )
   .then(() => {
      app.listen(process.env.PORT || 5000, () => {
         console.log("Database is Connected");
         console.log(`Server is running on ${process.env.PORT || 5000}`);
      });
   })
   .catch((e) => {
      return console.log(e);
   });
