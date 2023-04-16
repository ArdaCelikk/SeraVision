// add hovered class to selected list item
let list = document.querySelectorAll("nav li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector("nav");
let main = document.querySelector("main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


let alertContainer = document.querySelector(".alertBox")
fetch("/api/notifications", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
})
.then(res=>res.json())
.then(alerts=>{
  console.log(alerts.alerts);
  alertContainer.innerHTML=""
  for(let i = 0;i< alerts.alerts.length;i++)
  {
    // Alertin arkaplanı
    let alert= document.createElement("div")
    alert.className="alert"
    if(alerts.alerts[i].msgLevel==1)
    {
      alert.style.background="#1278aa"
    }
    else if(alerts.alerts[i].msgLevel==2)
    {
      alert.style.background="#ff6302"
    }
    else if(alerts.alerts[i].msgLevel==3)
    {
      alert.style.background="#ee092d"
    }
    else
    {
      alert.style.background="#fff"
    }
    alertContainer.appendChild(alert)
    // -------------------------------------------------



    // TOP DİV
    let top = document.createElement("div")
    top.className="top"
    alert.appendChild(top)

    // ALERT İCON
    let alertIcon = document.createElement("div")
    alertIcon.className="left"
    alertIcon.innerHTML="<ion-icon name='leaf-outline'></ion-icon>"
    top.appendChild(alertIcon)
    // ---------------------------------

    // ALERT RİGHT
    let alertRight = document.createElement("div")
    alertRight.className="right"
    top.appendChild(alertRight)
    // ------------------------------

    // ALERT RİGHT HEADER
    let alertRightHeader = document.createElement("div")
    alertRightHeader.className="header"
    alertRightHeader.textContent=alerts.alerts[i].msgHeader
    alertRight.appendChild(alertRightHeader)
    // ------------------------------------------

    // ALERT RİGHT MAİN
    let alertRightMain = document.createElement("div")
    alertRightMain.className="main"
    alertRightMain.textContent=alerts.alerts[i].msg
    alertRight.appendChild(alertRightMain)
    // ---------------------

    // Alert Bottom
    let alertFooter = document.createElement("div")
    alertFooter.className="footer"
    alertFooter.textContent=alerts.alerts[i].time
    alert.appendChild(alertFooter)
  }

})
.catch(err=>{
  if(err){}
})