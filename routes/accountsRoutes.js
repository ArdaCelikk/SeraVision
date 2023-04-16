const accountsController = require("../controllers/accountsController")
const router = require("express").Router()
const middlewares = require("../middlewares/authmiddleware")



router.route("/register").get(middlewares.reverseAuthenticateToken,accountsController.getRegisterPage)
router.route("/register").post(middlewares.reverseAuthenticateToken,accountsController.registerUser)
router.route("/login").get(middlewares.reverseAuthenticateToken, accountsController.getLoginPage)
router.route("/login").post(middlewares.reverseAuthenticateToken, accountsController.loginUser)

module.exports = router