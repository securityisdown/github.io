function loadAPI() {
    let url = "https://randomuser.me/api"
    fetch(url)
        .then(response => response.json())
        .then(data => showPerson(data))
        .catch(error => console.log("Ocurrio un error ", error))
}

function showPerson(data) {
    document.querySelector("#api").innerHTML = `WebMaster: ${data.results[0].name.first} ${data.results[0].name.last} `
}
