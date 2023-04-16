const txtUsername = document.getElementById("txtUsername")
const txtPassword = document.getElementById("txtPassword")
const formLogin = document.getElementById("formLogin")
const lblAlert = document.getElementById("lblAlert")

formLogin.addEventListener("submit",async ()=>{
    const request = await fetch("/accounts/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: txtUsername.value,
        password: txtPassword.value,
      }),
    });

    const response = await request.json()

    if(response.succeded){
        lblAlert.textContent= "Giriş İşlemi Başarılı Yönlendiriliyorsunuz.."
        location.href = "/dashboard"
    }else{
        lblAlert.textContent = response.msg
    }
})