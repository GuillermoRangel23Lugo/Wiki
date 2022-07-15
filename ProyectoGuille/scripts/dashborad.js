var boton = document.getElementById("opciones")
var boton2 = document.getElementById("opciones2")
var dashboard = document.getElementById("dashboard")


boton.addEventListener("click", function(){
    if(dashboard.getAttribute("hidden") == "true"){
        dashboard.removeAttribute("hidden")
        dashboard.style.height = "100vh"
    }
    else{
        dashboard.setAttribute("hidden", "true")
    }
})

boton2.addEventListener("click", function(){
    if(dashboard.getAttribute("hidden") == "true"){
        dashboard.removeAttribute("hidden")
    }
    else{
        dashboard.setAttribute("hidden", "true")
    }
})