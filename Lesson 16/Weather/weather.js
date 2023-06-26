
let iconUrl = 'http://openweathermap.org/img/w/';
let xhr = new XMLHttpRequest();

function getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
    xhr.open('GET', url, false);
    xhr.send();

    if (xhr.status !== 200) {
        // обробити помилку
        console.log('Помилка ' + xhr.status + ': ' + xhr.statusText);
    } else {
        // вивести результат
        const result = JSON.parse(xhr.responseText);
        const body = document.querySelector('body');
        body.innerHTML =
            `<input type="text" id="city">
<button type="submit">show me the weater</button>
<p>City: ${result.name}</p>
<p>Temperature: ${Math.round(result.main.temp)}°</p>
<p>Feels like: ${Math.round(result.main.feels_like)}°</p>
<p>Pressure: ${Math.round(result.main.pressure)} hPa</p>
<p>Humidity: ${Math.round(result.main.humidity)} %</p>
<p>Wind speed: ${Math.round(result.wind.speed)} m/s</p>
<p>Wind direction: ${Math.round(result.wind.deg)} deg</p>
<img src="${iconUrl + result.weather[0].icon}.png" alt="weather icon">`;
    }
}

window.addEventListener('click', (e) =>{
    if(e.target.type === 'submit'){
        const city = document.querySelector('#city');
        getWeather(city.value)
    }
})