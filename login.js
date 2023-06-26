console.log("Esta conectado");

if(localStorage.getItem("URL")){
    if(localStorage.getItem("User")){
        window.location.href = localStorage.getItem("URL");
    }
}
else{
    localStorage.setItem("URL", window.location.href);
}

function IniciarSesion() {
    const User = document.getElementById("User");
    const Pass = document.getElementById("Pass");
    console.log(User.value + " | " + Pass.value)
    if(User.value == "jcorona" && Pass.value == "4886"){
        localStorage.setItem("User",User.value);
        localStorage.setItem("Pass",Pass.value);
        if(localStorage.getItem("URL") == window.location.href){
            window.location.href = "./index.html";
        }else{
            window.location.href = localStorage.getItem("URL");
        }
        
    }
}