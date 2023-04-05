// registering service worker

if ('serviceWorker' in navigator) {
    navigator
    navigator.serviceWorker.register('serviceworker.js').then(function (res) {
        console.log('Registration Successful');
    });
} else { 
    console.log("Service Worker Registration fails")
}


const baseUrl = "http://localhost:5256"
const uri = "/WeatherForecast"
let weather = [] 

async function getWeather() {
    await fetch(baseUrl + uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.log("Erro ao buscar previsões.", error))
}

// an underscore is used to denote private variables or functions.
function _displayItems(data) {
    const ul = document.querySelector(".lists")
    ul.innerHTML = ''

    data.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${new Date(item.date).toDateString()}, ${item.temperatureC}º Graus Celsius`

        ul.appendChild(li)
    })

    weather = data
}