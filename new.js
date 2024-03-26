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
  iconElement.innerHTML = `<img src = "${response.data.condition.icon-url}" class="weather-emoji" `;
  
  getForecast(response.data.city);  
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
 
function searchCity(_myCity) {
  let apiKey = "4c73afe5o050bba699d3815afbb0tfa9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city} &key=${apiKey}unit=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#searchInput");
  searchCity(searchElement.value);
}

let searchInputElement=document.querySelector("#submitValue");
searchInputElement.addEventListener("submit", handleSearchSubmit);


