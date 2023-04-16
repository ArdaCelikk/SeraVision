const apiController = require("../controllers/apiController")
const middlewares = require("../middlewares/authmiddleware")
const router = require("express").Router()

router.route("/states").post(middlewares.authenticateToken,apiController.stateStatus)
router.route("/greenhouse").post(middlewares.authenticateToken,apiController.greenHouseStatus)
router.route("/notifications").post(middlewares.authenticateToken,apiController.getNotifications)


module.exports = router