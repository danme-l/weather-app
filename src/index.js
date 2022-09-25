import {cities} from './resources/world-cities.js'

const WEATHER_API_KEY = '696cc74d66404171a01375b3553b06dd'; // weather API key
const GIF_API_KEY = 'x32JUJ1NLu5c1INsYrJyRzLpBq8e8Dqs';

// header elements
const citySearchBox = document.getElementById('city-search-box');
citySearchBox.defaultValue = "Toronto";
const citySearchBtn = document.getElementById('city-search-btn');
const headerRight = document.getElementById('header-right');
const randomCityBtn = document.getElementById('random-city-btn');
randomCityBtn.addEventListener('click', getRandomCity);

//content elements 
const cityBox = document.getElementById('city-box');
const dateBox = document.getElementById('date-box');
const tempBox = document.getElementById('temp-box');
const main = document.querySelector('main');
const iconSpot = document.getElementById('icon-spot');

let curWeatherMode = 'celsius';

let weatherStore = {
    city: 'city',
}

async function getWeather(city) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_API_KEY}`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
}

function handleCityInput() {
    main.classList.replace('visible', 'hidden');
    let city = document.getElementById('city-search-box').value
    console.log(city);
    getWeather(city).then(data => {
        console.log(data.name);
        console.log(data.main);
        updateView(data);
    });
}

citySearchBtn.addEventListener('click', handleCityInput);

function updateView(weatherData) {
    // for transitions
    main.classList.replace('hidden', 'visible')

    // update DOM elements in main
    cityBox.innerHTML = formatPlaceName(JSON.stringify(weatherData.name)) + ', ' + formatPlaceName(JSON.stringify(weatherData.sys.country)) +  "</br>"  
    dateBox.innerHTML = convertUnixDate(weatherData.dt);
    tempBox.innerHTML = formatTemp(weatherData.main) + "</br>";
    iconSpot.innerHTML = '';
    let weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    iconSpot.appendChild(weatherIcon);
}

// string formatting functions
function formatPlaceName(str) {
    // drop quote marks around the city name
    return str.replace(/['"]+/g, '');
}

function formatTemp(obj) {
    return ` 
    <h3>The current temperature is ${convertTemp('celsius', obj["temp"])}&#176 (Feels like ${convertTemp('celsius', obj["feels_like"])}&#176) </h3><br>
    Minimum: ${convertTemp('celsius', obj["temp_min"])}&#176 -- Maximum: ${convertTemp('celsius', obj["temp_max"])}&#176 <br>
    Humidity: ${obj["humidity"]}% <br>
    Air Pressure: ${obj["pressure"]} hPa <br>
    `
}

function convertTemp(mode, temp) {
    if (mode === 'celsius') {
        return Math.round(temp - 270.3);
    } else if (mode == "fahrenheit") {
        return (9/5)*(temp-270.3) + 32;
    }
}

function convertUnixDate(dt) {
    let d = new Date(dt*1000);
    // dtCon = d.getDate() + '/' + (d.getMonth()) + '/' + d.getFullYear() + " " + d.getHours() + ':' + d.getMinutes();
    let dtCon = d.toLocaleString();
    return dtCon;
};

function getRandomCity() {
    let city = cities[Math.floor(Math.random() * cities.length)]
    console.log(city);
    main.classList.replace('visible', 'hidden');
    getWeather(city).then(data => {
        console.log(data.name);
        console.log(data.main);
        updateView(data);
    });
}