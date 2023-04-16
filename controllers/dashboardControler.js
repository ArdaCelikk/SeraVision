
const getDashboardPage = (req,res)=>{
    res.render("panel")
}

const getNotificationsPage = (req,res)=>{
    res.render("bildirimler")
}
const getSettingsPage = (req,res)=>{
    res.render("ayarlar")
}

module.exports = {
    getNotificationsPage,
    getDashboardPage,
    getSettingsPage
}