const pageControllers = require("../controllers/pageControllers")
const router = require("express").Router()

router.route("/").get(pageControllers.getIndexPage)
router.route("/hakkimizda").get(pageControllers.getAboutUsPage)
router.route("/iletisim").get(pageControllers.getContactUsPage)
router.route("/logout").get(pageControllers.getLogout)



module.exports = router