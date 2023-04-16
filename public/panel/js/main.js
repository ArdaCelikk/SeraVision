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

const statusWatering = document.getElementById("statusWatering")
const statusHeater = document.getElementById("statusHeater")
const statusFan = document.getElementById("statusFan")
const statusLight = document.getElementById("statusLight")

// GET STATES
const getStatesStatus = async ()=>{
  const request = await fetch("/api/states", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  })

  const response = await request.json()
  if(response.succeded){
    statusWatering.textContent = response.status.watering == true ?  "Açık"  : "Kapalı"
    if(response.status.watering){
      statusWatering.parentElement.parentElement.classList.add("active")
    }

    statusHeater.textContent = response.status.heater == true ?  "Açık"  : "Kapalı"
    if(response.status.heater){
      statusHeater.parentElement.parentElement.classList.add("active")
    }

    statusFan.textContent = response.status.fan == true ?  "Açık"  : "Kapalı"
    if(response.status.fan){
      statusFan.parentElement.parentElement.classList.add("active")
    }

    statusLight.textContent = response.status.light == true ?  "Açık"  : "Kapalı"
    if(response.status.light){
      statusLight.parentElement.parentElement.classList.add("active")
    }
    
  }
}

getStatesStatus()
setInterval(getStatesStatus(), 3000);
// GET DEVİCE STATUS END ------------<<<<<<<<<<<>>>>>>>>>>>>>>  - -----------------------

const temperature = document.getElementById("temperature")
const lightAmount = document.getElementById("lightAmount")
const humadityAmount = document.getElementById("humadityAmount")
const soilhumadityAmount = document.getElementById("soilhumadityAmount")

// GET GREENHOUSESTATUS
const getGreenhouseStatus = async ()=>{
  const request = await fetch("/api/greenhouse", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
  })

  const response = await request.json()
  if(response.succeded){
    temperature.textContent = response.greenhouse.temperature
    lightAmount.textContent = response.greenhouse.light
    humadityAmount.textContent = response.greenhouse.humadity
    soilhumadityAmount.textContent = response.greenhouse.soilhumadity
  }
}
getGreenhouseStatus()
setInterval(getGreenhouseStatus(), 3000);



var ctx = document.getElementById("myChart").getContext("2d");
    var temperatures = [18, 20, 22, 23, 24, 25, 26, 25, 24, 22, 20, 18];
    var times = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00"];
    var temperatureData = {
      labels: times,
      datasets: [{
        label: "Sıcaklık",
        data: temperatures,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1
      }]
    };

    var myChart = new Chart(ctx, {
      type: 'line',
      data: temperatureData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    var ctx = document.getElementById("myChart2").getContext("2d");
    var humidities = [72, 68, 67, 64, 61, 58, 55, 56, 60, 65, 70, 72];
    var times = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00"];
    var humidityData = {
      labels: times,
      datasets: [{
        label: "Nem",
        data: humidities,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
      }]
    };

    var myChart2 = new Chart(ctx, {
      type: 'line',
      data: humidityData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    var ctx = document.getElementById("myChart3").getContext("2d");
    var soilMoistures = [34, 32, 31, 30, 29, 28, 27, 26, 28, 30, 32, 33];
    var times = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00"];
    var soilMoistureData = {
      labels: times,
      datasets: [{
        label: "Toprak Nem",
        data: soilMoistures,
        backgroundColor: "rgb(0, 128, 0)",
        borderColor: "rgb(0, 128, 0)",
        borderWidth: 1
      }]
    };

    var myChart3 = new Chart(ctx, {
      type: 'line',
      data: soilMoistureData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });



    var ctx = document.getElementById("myChart4").getContext("2d");
    var lightAmounts = [1200, 1100, 1000, 950, 900, 850, 825, 850, 900, 950, 1050, 1100];
    var times = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00"];
    var lightAmountData = {
      labels: times,
      datasets: [{
        label: "Işık Miktarı",
        data: lightAmounts,
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1
      }]
    };

    var myChart4 = new Chart(ctx, {
      type: 'line',
      data: lightAmountData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });