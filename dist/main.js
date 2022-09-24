/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const API_KEY = '696cc74d66404171a01375b3553b06dd'; // weather API key
const URL = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=';

const cityBox = document.getElementById('city-box');
const citySearchBtn = document.getElementById('city-search-btn');

async function getWeather() {
    const response = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=696cc74d66404171a01375b3553b06dd", {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
}

getWeather();

function handleCityInput() {
    let city = document.getElementById('city-search-box').value
    cityBox.innerHTML += city;
}

citySearchBtn.addEventListener('click', handleCityInput);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0tBQXNLLGFBQWE7QUFDbkw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX0tFWSA9ICc2OTZjYzc0ZDY2NDA0MTcxYTAxMzc1YjM1NTNiMDZkZCc7IC8vIHdlYXRoZXIgQVBJIGtleVxuY29uc3QgVVJMID0gJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24mQVBQSUQ9JztcblxuY29uc3QgY2l0eUJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LWJveCcpO1xuY29uc3QgY2l0eVNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5LXNlYXJjaC1idG4nKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PTMzLjQ0Jmxvbj0tOTQuMDQmZXhjbHVkZT1ob3VybHksZGFpbHkmYXBwaWQ9Njk2Y2M3NGQ2NjQwNDE3MWEwMTM3NWIzNTUzYjA2ZGRcIiwge21vZGU6ICdjb3JzJ30pO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbn1cblxuZ2V0V2VhdGhlcigpO1xuXG5mdW5jdGlvbiBoYW5kbGVDaXR5SW5wdXQoKSB7XG4gICAgbGV0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1zZWFyY2gtYm94JykudmFsdWVcbiAgICBjaXR5Qm94LmlubmVySFRNTCArPSBjaXR5O1xufVxuXG5jaXR5U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2l0eUlucHV0KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=