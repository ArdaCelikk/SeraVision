const Devices = require("../models").devicestatus
const GreenHouse = require("../models").greenhousestatus
const Notif = require("../models").notifications
const stateStatus = async (req,res)=>{
    try {
        const status = await Devices.findOne({where:{id:1}})
        if(status){
            res.status(200).json({
                succeded:true,
                status
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded:false,
            msg:error.message
        })
    }
}
const greenHouseStatus = async (req,res)=>{
    try {
        const greenhouse = await GreenHouse.findOne({where:{id:1}})
        if(greenhouse){
            res.status(200).json({
                succeded:true,
                greenhouse
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded:false,
            msg:error.message
        })
    }
}

const getNotifications = async (req,res)=>{
    try {
        const alerts = await Notif.findAll()
        if(alerts){
            res.status(200).json({
                succeded:true,
                alerts
            })
        }
    } catch (error) {
       res.status(500).json({
        succeded:false,
        msg:error.message
       }) 
    }
}

module.exports = {
    stateStatus,
    greenHouseStatus,
    getNotifications
}