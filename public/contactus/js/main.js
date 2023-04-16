let btnOpenToggleMenu = document.getElementById("btnOpenToggleMenu")
let btnToggleMenuCloser = document.getElementById("btnToggleMenuCloser")
let toggleMenu = document.querySelector(".toggleMenu")
btnOpenToggleMenu.addEventListener("click",()=>{
    toggleMenu.classList.add("active")
})
btnToggleMenuCloser.addEventListener("click",()=>{
    toggleMenu.classList.remove("active")
})


let formSendMail = document.getElementById("formSendMail")
let txtFullName =document.getElementById("txtFullName")
let txtEmailAdress= document.getElementById("txtEmailAdress")
let txtPhoneNumber= document.getElementById("txtPhoneNumber")
let txtTextHeader= document.getElementById("txtTextHeader")
let taText= document.getElementById("taText")
formSendMail.addEventListener("submit",()=>{
    fetch("http://45.95.66.76:3000/seravision/sendMail", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        user_fullName:txtFullName.value,
        user_emailAdress:txtEmailAdress.value,
        user_phoneNumber:txtPhoneNumber.value,
        textHeader:txtTextHeader.value,
        text:taText.value
    }),
    })
})

