// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

if ('serviceWorker' in navigator) {
    navigator
    navigator.serviceWorker.register('serviceworker.js').then(function (res) {
        console.log('Registration Successful');
    });
} else { 
    console.log("Service Worker Registration fails")
}

async function fetchWeatherForecast() {""
    await fetch('http://localhost:5256/WeatherForecast').then(res => res.json()).then(data => console.log(data))
}

fetchWeatherForecast()