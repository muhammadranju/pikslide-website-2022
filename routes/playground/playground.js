const router = require("express").Router();
const upload = require("../../middleware/uploadMiddleware");

//Get Reqiest
router.get("/", (req, res, next) => {
   // console.log(Flash.getMessage(req));

   res.render("pages/playground/signup", {
      title: "Signup",
   });
});

//Post Reqiest
router.post("/", (req, res, next) => {
   res.redirect("/playground");
});

module.exports = router;
