let url = "https://randomuser.me/api"

function onLoad() {
    document.querySelector("header").innerHTML=header
    document.querySelector("footer").innerHTML=footer
    document.querySelector("nav").innerHTML=nav

    loadAPI()

    let boton = document.querySelector("#sendmail")

    if (boton != null) {
        boton.addEventListener("click",validations)
    }
}

function loadAPI() {
    fetch(url)
        .then(response => response.json())
        .then(data => showPerson(data))
        .catch(error => console.log("Ocurrio un error ", error))
}

function showPerson(data) {
    document.querySelector("#api").innerHTML = `<div>
                                                    <img id="foto" src="${data.results[0].picture.thumbnail}" alt="Foto" />
                                                </div>
                                                <div>
                                                    WebMaster:<br> 
                                                    ${data.results[0].name.first} ${data.results[0].name.last}
                                                </div>`
}

function validations(event) {
    let ok = true
    let nombre = document.querySelector("#Nameinput")
    let email = document.querySelector("#emailinput")
    let fono = document.querySelector("#Phoneinput")
    let asunto = document.querySelector("#titleinput")
    let mensaje = document.querySelector("#Mensajeinput")

    event.preventDefault();
    event.stopPropagation();

    if (nombre.value=="") {
        alert("Debe ingresar el campo Nombre.")
        ok=false
        return ok;
    }
    if (email.value=="") {
        alert("Debe ingresar el campo Email.")
        ok=false
        return ok;
    }
    if (fono.value=="") {
        alert("Debe ingresar el campo Telefono.")
        ok=false
        return ok;
    }
    if (asunto.value=="") {
        alert("Debe ingresar el campo Asunto.")
        ok=false
        return ok;
    }
    if (mensaje.value=="") {
        alert("Debe ingresar el campo Mensaje.")
        ok=false
        return ok;
    }
    if (!ValidateEmail(email.value)) {
        alert("Debe ingresar un Email valido.")
        ok=false
        return ok;
    }
    if (ok) {
        alert("Se ha enviado un mail.")
    }
    
    return ok;
}

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
        //alert("Valid email address!");
        //document.form1.text1.focus();
        return true;
    } else {
        //alert("Invalid email address!");
        //document.form1.text1.focus();
        return false;
    }
}
