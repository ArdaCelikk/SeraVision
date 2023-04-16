let btnOpenToggleMenu = document.getElementById("btnOpenToggleMenu")
let btnToggleMenuCloser = document.getElementById("btnToggleMenuCloser")
let toggleMenu = document.querySelector(".toggleMenu")
btnOpenToggleMenu.addEventListener("click",()=>{
    toggleMenu.classList.add("active")
})
btnToggleMenuCloser.addEventListener("click",()=>{
    toggleMenu.classList.remove("active")
})



