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


















// ISITMA AYARLARI SEÇENEKLERİ

let rbMaxTempManuel = document.getElementById("rbMaxTempManuel")
let rbMaxTempPercentile = document.getElementById("rbMaxTempPercentile")
let rbMaxTempClockset = document.getElementById("rbMaxTempClockset")


let boxMaxTempManuel = document.getElementById("boxMaxTempManuel")
let boxMaxTempPercentile = document.getElementById("boxMaxTempPercentile")
let lblMinTemp = document.getElementById("lblMinTemp")
let rangeMaxTempPercentile = document.getElementById("rangeMaxTempPercentile")
let clocksetMax = document.querySelector("#boxMaxTempClockset")



rangeMaxTempPercentile.oninput= ()=>{
  lblMinTemp.textContent = "Minimum Sıcaklık: "+ rangeMaxTempPercentile.value
}

rbMaxTempManuel.addEventListener("click",()=>{
  boxMaxTempManuel.style.display = "flex"
  boxMaxTempPercentile.style.display = "none"
  clocksetMax.style.display = "none"
})

rbMaxTempPercentile.addEventListener("click",()=>{
  boxMaxTempManuel.style.display = "none"
  clocksetMax.style.display = "none"
  boxMaxTempPercentile.style.display = "flex"
})

rbMaxTempClockset.addEventListener("click",()=>{
  boxMaxTempManuel.style.display = "none"
  clocksetMax.style.display = "flex"
  boxMaxTempPercentile.style.display = "none"
})
// ------------------------ <<<<<<<<<<<<<<>>>>>>>>>>>>>>> ---------------------------
// ------------------------ <<<<<<<<<<<<<<>>>>>>>>>>>>>>> ---------------------------


// SOĞUTMA AYARLARI SEÇENEKLERİ
let rbMinTempManuel = document.getElementById("rbMinTempManuel")
let rbMinTempPercentile = document.getElementById("rbMinTempPercentile")
let rbMinTempClockset = document.getElementById("rbMinTempClockset")

let boxMinTempManuel = document.getElementById("boxMinTempManuel")
let boxMinTempPercentile = document.getElementById("boxMinTempPercentile")
let lblMaxTemp = document.getElementById("lblMaxTemp")
let clocksetMin = document.querySelector("#boxMinTempClockset")
let rangeMinTempPercentile = document.getElementById("rangeMinTempPercentile")


rangeMinTempPercentile.oninput= ()=>{
  lblMaxTemp.textContent = "Maksimum Sıcaklık: "+ rangeMinTempPercentile.value
}

rbMinTempManuel.addEventListener("click",()=>{
  boxMinTempManuel.style.display = "flex"
  boxMinTempPercentile.style.display = "none"
  clocksetMin.style.display = "none"
})

rbMinTempPercentile.addEventListener("click",()=>{
  boxMinTempManuel.style.display = "none"
  clocksetMin.style.display = "none"
  boxMinTempPercentile.style.display = "flex"
})

rbMinTempClockset.addEventListener("click",()=>{
  boxMinTempManuel.style.display = "none"
  clocksetMin.style.display = "flex"
  boxMinTempPercentile.style.display = "none"
})
// ------------------------ <<<<<<<<<<<<<<>>>>>>>>>>>>>>> ---------------------------
// ------------------------ <<<<<<<<<<<<<<>>>>>>>>>>>>>>> ---------------------------



// SULAMA SEÇENEKLERİ
// Watering Radios 
const rbWateringManuel = document.getElementById("rbWateringManuel")
const rbWateringPercentile = document.getElementById("rbWateringPercentile")
const rbWateringClockset = document.getElementById("rbWateringClockset")


const boxWateringManuel= document.getElementById("boxWateringManuel")
const boxWateringPercentile = document.getElementById("boxWateringPercentile")
const boxWateringClockset = document.getElementById("boxWateringClockset")

rbWateringManuel.addEventListener("click",()=>{
    boxWateringManuel.style.display = "flex"
    boxWateringPercentile.style.display = "none"
    boxWateringClockset.style.display = "none"
})

rbWateringPercentile.addEventListener("click",()=>{
    boxWateringManuel.style.display = "none"
    boxWateringPercentile.style.display = "flex"
    boxWateringClockset.style.display = "none"
})


rbWateringClockset.addEventListener("click",()=>{
    boxWateringManuel.style.display = "none"
    boxWateringPercentile.style.display = "none"
    boxWateringClockset.style.display = "flex"
})


const rangeWateringMax = document.getElementById("rangeWateringMax")
const lblWateringMax = document.getElementById("lblWateringMax")

const rangeWateringMin = document.getElementById("rangeWateringMin")
const lblWateringMin = document.getElementById("lblWateringMin")

rangeWateringMin.onchange=()=>{
    if(rangeWateringMin.value >= rangeWateringMax.value ){
        rangeWateringMin.value=  rangeWateringMin.value - 10
    }
}

rangeWateringMin.oninput= ()=>{
  if(rangeWateringMin.value>=0 && rangeWateringMin.value<=300 ){
      lblWateringMin.textContent= "Minimum Toprak Nem Değeri:  Kuru Toprak"
  }else if(rangeWateringMin.value>301 && rangeWateringMin.value<=700 ){
      lblWateringMin.textContent= "Minimum Toprak Nem Değeri: Nemli Toprak"
  }else if(rangeWateringMin.value>701 && rangeWateringMin.value<=950 ){
      lblWateringMin.textContent= "Minimum Toprak Nem Değeri: Islak Toprak"
  }
}



rangeWateringMax.onchange=()=>{
    if(rangeWateringMin.value >= rangeWateringMax.value ){
        rangeWateringMax.value= rangeWateringMax.value + 10 
    }
}

rangeWateringMax.oninput= ()=>{
  if(rangeWateringMax.value>=0 && rangeWateringMax.value<=300 ){
      lblWateringMax.textContent= "Maksimum Toprak Nem Değeri: Kuru Toprak"
  }else if(rangeWateringMax.value>301 && rangeWateringMax.value<=700 ){
      lblWateringMax.textContent= "Maksimum Toprak Nem Değeri: Nemli Toprak"
  }else if(rangeWateringMax.value>701 && rangeWateringMax.value<=950 ){
      lblWateringMax.textContent= "Maksimum Toprak Nem Değeri: Islak Toprak"
  }
}


// ---------------------------------------------------------
// ------------------------ <<<<<<<<<<<<<<>>>>>>>>>>>>>>> ---------------------------
// ------------------------ <<<<<<<<<<<<<<>>>>>>>>>>>>>>> ---------------------------





// Işıklandırma SEÇENEKLERİ
// Işık Radio Buttons
const rbLightManuel = document.getElementById("rbLightManuel")
const rbLightPercentile= document.getElementById("rbLightPercentile")
const rbLightClockset = document.getElementById("rbLightClockset")


const boxLightManuel = document.getElementById("boxLightManuel")
const boxLightPercentile = document.getElementById("boxLightPercentile")
const boxLightClockset = document.getElementById("boxLightClockset")


rbLightManuel.addEventListener("click",()=>{
    boxLightManuel.style.display = "flex"
    boxLightPercentile.style.display = "none"
    boxLightClockset.style.display = "none"
})

rbLightPercentile.addEventListener("click",()=>{
    boxLightManuel.style.display = "none"
    boxLightPercentile.style.display = "flex"
    boxLightClockset.style.display = "none"
})

rbLightClockset.addEventListener("click",()=>{
    boxLightManuel.style.display = "none"
    boxLightPercentile.style.display = "none"
    boxLightClockset.style.display = "flex"
})



const rangeLightMin = document.getElementById("rangeLightMin")
const lblLightMin = document.getElementById("lblLightMin")

rangeLightMin.onchange=()=>{
    if(rangeLightMin.value >= rangeLightMax.value ){
        rangeLightMin.value= 0
    }
}

rangeLightMin.oninput= ()=>{
  if(rangeLightMin.value>=0 && rangeLightMin.value<=500 ){
      lblLightMin.textContent= "Minimum Işık Değeri: Karanlık"
  }else if(rangeLightMin.value>501 && rangeLightMin.value<=900 ){
      lblLightMin.textContent= "Minimum Işık Değeri: Kapalı Hava"
  }else if(rangeLightMin.value>901 && rangeLightMin.value<=1023 ){
      lblLightMin.textContent= "Minimum Işık Değeri: Aydınlık"
  }
}

const rangeLightMax = document.getElementById("rangeLightMax")
const lblLightMax = document.getElementById("lblLightMax")

rangeLightMax.onchange=()=>{
    if(rangeLightMin.value >= rangeLightMax.value ){
        rangeLightMax.value= 1023
    }
}

rangeLightMax.oninput= ()=>{
  if(rangeLightMax.value>=0 && rangeLightMax.value<=500 ){
      lblLightMax.textContent= "Maksimum Işık Değeri: Karanlık"
  }else if(rangeLightMax.value>501 && rangeLightMax.value<=900 ){
      lblLightMax.textContent= "Maksimum Işık Değeri: Kapalı Hava"
  }else if(rangeLightMax.value>901 && rangeLightMax.value<=1023 ){
      lblLightMax.textContent= "Maksimum Işık Değeri: Aydınlık"
  }
}


// --------------------------------------------------
// ------------------------ <<<<<<<<<<<<<<>>>>>>>>>>>>>>> ---------------------------
// ------------------------ <<<<<<<<<<<<<<>>>>>>>>>>>>>>> ---------------------------
