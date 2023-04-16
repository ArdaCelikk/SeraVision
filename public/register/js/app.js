

let formRegister1 = document.getElementById("formRegister")
let txtEmail= document.getElementById("txtEmail")
let txtUsername = document.getElementById("txtUsername")
let txtPassword = document.getElementById("txtPassword")
let lblAlert = document.getElementById("lblAlert")
let txtPasswordVerify = document.getElementById("txtPasswordVerify")

formRegister1.addEventListener("submit", async ()=>{
    if(txtPassword.value === txtPasswordVerify.value){
        const request = await fetch("/accounts/register", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: txtEmail.value,
                username: txtUsername.value,
                password:txtPassword.value
            }),
          })
        
        const response = await request.json()
        if(response.succeded){
            window.location.href = "/accounts/login"
        }else{
            lblAlert.textContent = response.msg
        }
    }else{
        lblAlert.textContent = "Şifreler Uyuşmuyor"
    }
    
})


