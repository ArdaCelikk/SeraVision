const bcrypt = require("bcrypt")
const User = require("../models").users
const jwt = require("jsonwebtoken")
require("dotenv").config()
const getRegisterPage = (req,res)=>{
    res.render("register")
}

const getLoginPage = (req,res)=>{
    res.render("login")
}


const registerUser =async  (req,res)=>{
    try {
        const {email , username , password} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const registerUser = await User.create({
            email:email,
            username,
            password:hashedPassword
        })
        if(registerUser.username){
            res.status(200).json({
                succeded:true,
                msg: "Kayıt İşlemi Başarılı!!!"
            })
        }
    } catch (error) {
        res.status(500).json({
            succeded:false,
            msg: error.message
        })
    }
}


const loginUser =async  (req,res)=>{
    try {
        const {username ,password} = req.body
        let checkEmail = await User.findOne({where:{username:username}})
        if(!checkEmail){
            res.status(409).json({
                succeded:false,
                msg: "Kullanıcı Adı Veya Şifre Hatalı!"
            })
        }else if(checkEmail){
            let comparePassword = await bcrypt.compare(password,checkEmail.password)
            if(comparePassword){
                const token = await jwt.sign({id: checkEmail.id},process.env.JWT_SECRET,{expiresIn:"1d"})
                res.cookie('jwt', token, {
                    httpOnly: true,
                    maxAge: 1000 * 60 * 60 * 24,
                });
                res.status(200).json({
                    succeded:true,
                    message: "Giriş Başarılı! Yönlendiriliyorsunuz..."
                })
            }else{
                res.status(409).json({
                    succeded:false,
                    message: "Kullanıcı Adı Veya Şifre Hatalı!"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            succeded:false,
            msg: error.message
        })
    }
}



module.exports = {
    getRegisterPage,
    getLoginPage,
    registerUser,
    loginUser
}