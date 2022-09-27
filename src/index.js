import {cities} from './resources/world-cities.js'; 
import { fromUnixTime } from 'date-fns';
import { mapModule } from './map.js';

const WEATHER_API_KEY = '696cc74d66404171a01375b3553b06dd'; // weather API key
const GIF_API_KEY = 'x32JUJ1NLu5c1INsYrJyRzLpBq8e8Dqs';

// header elements
const citySearchBox = document.getElementById('city-search-box');
citySearchBox.defaultValue = "Toronto";
const citySearchBtn = document.getElementById('city-search-btn');
const convertTempBtn = document.getElementById('temp-type');
const randomCityBtn = document.getElementById('random-city-btn');
randomCityBtn.addEventListener('click', getRandomCity);

//content elements 
const cityBox = document.getElementById('city-box');
const dateBox = document.getElementById('date-box');
const tempBox = document.getElementById('temp-box');
const main = document.querySelector('main');
const iconSpot = document.getElementById('icon-spot');

let curWeatherMode = 'C';

async function getWeather(city) {
    // get data from weather api
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHER_API_KEY}`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
}

function getData() {
    main.classList.replace('visible', 'hidden');
    let city = document.getElementById('city-search-box').value
    console.log(city);
    getWeather(city).then(data => {
        console.log(data.name);
        console.log(data.main);
        updateView(data);
    });
}

citySearchBtn.addEventListener('click', getData);

function updateView(weatherData) {
    // for transitions
    main.classList.replace('hidden', 'visible')

    // update DOM elements in main
    cityBox.innerHTML = formatPlaceName(JSON.stringify(weatherData.name)) + ', ' + formatPlaceName(JSON.stringify(weatherData.sys.country)) +  "</br>"  
    dateBox.innerHTML = convertUnixDate(weatherData.dt, weatherData.timezone);
    tempBox.innerHTML = formatWeatherBox(weatherData, curWeatherMode) + "</br>";
    iconSpot.innerHTML = '';
    let weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    iconSpot.appendChild(weatherIcon);

    // update map
    mapModule.centerMap(weatherData.coord.lon, weatherData.coord.lat)
}

// string formatting functions
function formatPlaceName(str) {
    // drop quote marks around the city name
    return str.replace(/['"]+/g, '');
}

function titleCase(str) {
    str = str.toLowerCase()
        .split(' ') // split at space
        .map(function(w) {
            return (w.charAt(0).toUpperCase() + w.slice(1))
        }); // capitalize first letter

    return str.join(' '); // join by a space and return
}

function formatWeatherBox(obj, unit) {
    return ` 
    <h2 id='weather-desc'>${titleCase(obj.weather[0].description)} </h2>
    <h3>The current temperature is ${formatTemp(unit, obj.main["temp"])}&#176 (Feels like ${formatTemp(unit, obj.main["feels_like"])}&#176) </h3><br>
    Minimum: ${formatTemp(unit, obj.main["temp_min"])}&#176 -- Maximum: ${formatTemp(unit, obj.main["temp_max"])}&#176 <br>
    Humidity: ${obj.main["humidity"]}% <br>
    Air Pressure: ${obj.main["pressure"]} hPa <br>
    `
}

function convertTemp() {
    if (curWeatherMode === 'C') {
        curWeatherMode = 'F';
    } else {
        curWeatherMode = 'C';
    }
    getData();
}

convertTempBtn.addEventListener('click', convertTemp)

function formatTemp(mode, temp) {
    if (mode === 'C') {
        return Math.round(temp - 270.3);
    } else if (mode == 'F') {
        return Math.round((9/5)*(temp-270.3) + 32);
    }
}

function convertUnixDate(dt, tzShift) {
    return fromUnixTime(dt+tzShift).toUTCString().slice(0,22);
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