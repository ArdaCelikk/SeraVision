

const getIndexPage = (req,res)=>{
    res.render("index")
}

const getAboutUsPage = (req,res)=>{
    res.render("hakkimizda")
}

const getContactUsPage = (req,res)=>{
    res.render("contactus")
}

const getRegisterPage = (req,res)=>{
    res.render("register")
}

const getLoginPage = (req,res)=>{
    res.render("login")
}


const getLogout = (req, res) => {
    res.cookie('jwt', '', {
      maxAge: 1,
    });
    res.redirect('/');
  };

module.exports = {
    getIndexPage,
    getAboutUsPage,
    getContactUsPage,
    getRegisterPage,
    getLoginPage,
    getLogout
}