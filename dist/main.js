/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const WEATHER_API_KEY = '696cc74d66404171a01375b3553b06dd'; // weather API key
const GIF_API_KEY = 'x32JUJ1NLu5c1INsYrJyRzLpBq8e8Dqs';

// header elements
const citySearchBox = document.getElementById('city-search-box');
citySearchBox.defaultValue = "Toronto";
const citySearchBtn = document.getElementById('city-search-btn');
const headerRight = document.getElementById('header-right');

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
    // return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`, {mode: 'cors'})
    //     .then(response => response.json())
    //     .then(json => (json.results))
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
    cityBox.innerHTML = formatCityName(JSON.stringify(weatherData.name)) + "</br>"  
    dateBox.innerHTML = convertUnixDate(weatherData.dt);
    tempBox.innerHTML = formatTemp(weatherData.main) + "</br>";
    iconSpot.innerHTML = '';
    let weatherIcon = document.createElement('img');
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    iconSpot.appendChild(weatherIcon);
}

// string formatting functions
function formatCityName(str) {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUE0RDtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRkFBcUYsS0FBSyxTQUFTLGdCQUFnQixJQUFJLGFBQWE7QUFDcEk7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLEtBQUssU0FBUyxRQUFRLElBQUksYUFBYTtBQUMvRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDRCQUE0QjtBQUN2RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxvQ0FBb0Msb0JBQW9CLDBDQUEwQztBQUN2SSxlQUFlLHdDQUF3QyxvQkFBb0Isd0NBQXdDO0FBQ25ILGdCQUFnQixnQkFBZ0I7QUFDaEMsb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgV0VBVEhFUl9BUElfS0VZID0gJzY5NmNjNzRkNjY0MDQxNzFhMDEzNzViMzU1M2IwNmRkJzsgLy8gd2VhdGhlciBBUEkga2V5XG5jb25zdCBHSUZfQVBJX0tFWSA9ICd4MzJKVUoxTkx1NWMxSU5zWXJKeVJ6THBCcThlOERxcyc7XG5cbi8vIGhlYWRlciBlbGVtZW50c1xuY29uc3QgY2l0eVNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LXNlYXJjaC1ib3gnKTtcbmNpdHlTZWFyY2hCb3guZGVmYXVsdFZhbHVlID0gXCJUb3JvbnRvXCI7XG5jb25zdCBjaXR5U2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktc2VhcmNoLWJ0bicpO1xuY29uc3QgaGVhZGVyUmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLXJpZ2h0Jyk7XG5cbi8vY29udGVudCBlbGVtZW50cyBcbmNvbnN0IGNpdHlCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1ib3gnKTtcbmNvbnN0IGRhdGVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1ib3gnKTtcbmNvbnN0IHRlbXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcC1ib3gnKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBpY29uU3BvdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uLXNwb3QnKTtcblxubGV0IGN1cldlYXRoZXJNb2RlID0gJ2NlbHNpdXMnO1xuXG5sZXQgd2VhdGhlclN0b3JlID0ge1xuICAgIGNpdHk6ICdjaXR5Jyxcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9JHtXRUFUSEVSX0FQSV9LRVl9YCwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgLy8gcmV0dXJuIGZldGNoKGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD0ke0FQSV9LRVl9YCwge21vZGU6ICdjb3JzJ30pXG4gICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAgICAgLnRoZW4oanNvbiA9PiAoanNvbi5yZXN1bHRzKSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2l0eUlucHV0KCkge1xuICAgIG1haW4uY2xhc3NMaXN0LnJlcGxhY2UoJ3Zpc2libGUnLCAnaGlkZGVuJyk7XG4gICAgbGV0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1zZWFyY2gtYm94JykudmFsdWVcbiAgICBjb25zb2xlLmxvZyhjaXR5KTtcbiAgICBnZXRXZWF0aGVyKGNpdHkpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEubmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEubWFpbik7XG4gICAgICAgIHVwZGF0ZVZpZXcoZGF0YSk7XG4gICAgfSk7XG59XG5cbmNpdHlTZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDaXR5SW5wdXQpO1xuXG5mdW5jdGlvbiB1cGRhdGVWaWV3KHdlYXRoZXJEYXRhKSB7XG4gICAgLy8gZm9yIHRyYW5zaXRpb25zXG4gICAgbWFpbi5jbGFzc0xpc3QucmVwbGFjZSgnaGlkZGVuJywgJ3Zpc2libGUnKVxuXG4gICAgLy8gdXBkYXRlIERPTSBlbGVtZW50cyBpbiBtYWluXG4gICAgY2l0eUJveC5pbm5lckhUTUwgPSBmb3JtYXRDaXR5TmFtZShKU09OLnN0cmluZ2lmeSh3ZWF0aGVyRGF0YS5uYW1lKSkgKyBcIjwvYnI+XCIgIFxuICAgIGRhdGVCb3guaW5uZXJIVE1MID0gY29udmVydFVuaXhEYXRlKHdlYXRoZXJEYXRhLmR0KTtcbiAgICB0ZW1wQm94LmlubmVySFRNTCA9IGZvcm1hdFRlbXAod2VhdGhlckRhdGEubWFpbikgKyBcIjwvYnI+XCI7XG4gICAgaWNvblNwb3QuaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgd2VhdGhlckljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYDtcbiAgICBpY29uU3BvdC5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG59XG5cbi8vIHN0cmluZyBmb3JtYXR0aW5nIGZ1bmN0aW9uc1xuZnVuY3Rpb24gZm9ybWF0Q2l0eU5hbWUoc3RyKSB7XG4gICAgLy8gZHJvcCBxdW90ZSBtYXJrcyBhcm91bmQgdGhlIGNpdHkgbmFtZVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvWydcIl0rL2csICcnKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGVtcChvYmopIHtcbiAgICByZXR1cm4gYCBcbiAgICA8aDM+VGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUgaXMgJHtjb252ZXJ0VGVtcCgnY2Vsc2l1cycsIG9ialtcInRlbXBcIl0pfSYjMTc2IChGZWVscyBsaWtlICR7Y29udmVydFRlbXAoJ2NlbHNpdXMnLCBvYmpbXCJmZWVsc19saWtlXCJdKX0mIzE3NikgPC9oMz48YnI+XG4gICAgTWluaW11bTogJHtjb252ZXJ0VGVtcCgnY2Vsc2l1cycsIG9ialtcInRlbXBfbWluXCJdKX0mIzE3NiAtLSBNYXhpbXVtOiAke2NvbnZlcnRUZW1wKCdjZWxzaXVzJywgb2JqW1widGVtcF9tYXhcIl0pfSYjMTc2IDxicj5cbiAgICBIdW1pZGl0eTogJHtvYmpbXCJodW1pZGl0eVwiXX0lIDxicj5cbiAgICBBaXIgUHJlc3N1cmU6ICR7b2JqW1wicHJlc3N1cmVcIl19IGhQYSA8YnI+XG4gICAgYFxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VGVtcChtb2RlLCB0ZW1wKSB7XG4gICAgaWYgKG1vZGUgPT09ICdjZWxzaXVzJykge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0ZW1wIC0gMjcwLjMpO1xuICAgIH0gZWxzZSBpZiAobW9kZSA9PSBcImZhaHJlbmhlaXRcIikge1xuICAgICAgICByZXR1cm4gKDkvNSkqKHRlbXAtMjcwLjMpICsgMzI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5peERhdGUoZHQpIHtcbiAgICBsZXQgZCA9IG5ldyBEYXRlKGR0KjEwMDApO1xuICAgIC8vIGR0Q29uID0gZC5nZXREYXRlKCkgKyAnLycgKyAoZC5nZXRNb250aCgpKSArICcvJyArIGQuZ2V0RnVsbFllYXIoKSArIFwiIFwiICsgZC5nZXRIb3VycygpICsgJzonICsgZC5nZXRNaW51dGVzKCk7XG4gICAgbGV0IGR0Q29uID0gZC50b0xvY2FsZVN0cmluZygpO1xuICAgIHJldHVybiBkdENvbjtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=