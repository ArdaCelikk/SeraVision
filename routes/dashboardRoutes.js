const dashboardControler = require("../controllers/dashboardControler")
const router = require("express").Router()
const middlewares = require("../middlewares/authmiddleware")

router.route("/").get(middlewares.authenticateToken,dashboardControler.getDashboardPage)
router.route("/bildirimler").get(middlewares.authenticateToken,dashboardControler.getNotificationsPage)
router.route("/ayarlar").get(middlewares.authenticateToken,dashboardControler.getSettingsPage)


module.exports = router