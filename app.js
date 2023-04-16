const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const pageRoute = require("./routes/pageRoutes")
const accountsRoutes = require("./routes/accountsRoutes")
const dashboardRoute = require("./routes/dashboardRoutes")
const apiRoute = require("./routes/apiRoutes")
const middlewares = require("./middlewares/authmiddleware")
const app = express()


dotenv.config()
const port = process.env.PORT
app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser());

// ROUTES
app.use("*",middlewares.checkUser)
app.use("/",pageRoute)
app.use("/accounts", accountsRoutes)
app.use("/dashboard", dashboardRoute)
app.use("/api", apiRoute)

app.listen(port,()=>{
    console.log("Server Started On This Port: "+ port);
})







