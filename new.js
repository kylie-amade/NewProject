function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#myCity");
  let informationElement = document.querySelector("#weather-information");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windSpeed");
  let timeElement = document.querySelector("#dateTime");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#weather-emoji");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  informationElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  windSpeedElement.innerHTML = `${response.data.windSpeed}km/h`;
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img src = "${
    response.data.condition.icon - url
  }" class="weather-emoji" `;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }
  return `${day} ${hours} :${minutes}`;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#searchInput");
  let city = searchElement.value;
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(refreshWeather);
}

function formatDay(timestamp){
  let date = new Date(timestamp*1000);
  let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  return days[date.getDay()];
}

function getForecast(city){
  let apiKey = "4c73afe5o050bba699d3815afbb0tfa9";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response){
  let forecastHtml = "";
  response.data.daily.forEach(function(day,index){
    if index<5){
      forecastHtml = forecastHtml + 
      `
      <div class = "weather-forecast-day">
       <div class = "weather-forecast-date">${formatDay(day.time)}</div>
       <img src = " $
       <div class = "weather-forecast-temperature">
      `
    }
  }

  


let searchInputElement = document.querySelector("#search-form");
searchInputElement.addEventListener("submit", handleSearchSubmit);
