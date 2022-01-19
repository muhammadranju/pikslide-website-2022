const router = require("express").Router();

const {
   home,
   signupGetControllers,
   signupPostControllers,
   loginGetControllers,
   loginPostControllers,
   forgotPasswordGetControllers,
   forgotPasswordPostControllers,
   verifyGetControllers,
   verifyPostControllers,
   logoutGetControllers,
} = require("../../controllers/authControllers");

const signupValidator = require("../../validetor/auth/signupValidator");
const loginValidator = require("../../validetor/auth/loginValidator");
const { isUnAuthenticated } = require("../../middleware/authMiddleware");

router.get("/", home);

router.get("/signup", isUnAuthenticated, signupGetControllers);
router.post(
   "/signup",
   isUnAuthenticated,
   signupValidator,
   signupPostControllers
);

router.get("/login", isUnAuthenticated, loginGetControllers);
router.post("/login", isUnAuthenticated, loginValidator, loginPostControllers);

router.get("/forgot-password", isUnAuthenticated, forgotPasswordGetControllers);
router.post("/forgot-password", forgotPasswordPostControllers);

router.get("/verify", isUnAuthenticated, verifyGetControllers);
router.post("/verify", verifyPostControllers);

router.get("/logout", logoutGetControllers);

module.exports = router;
