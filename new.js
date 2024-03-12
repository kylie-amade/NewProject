let searchInputElement = document.querySelector("#theForm");
searchInputElement.addEventListener("submit", handleSearch);

function searchCity(newcity) {
  let apiKey = "4c73afe5o050bba699d3815afbb0tfa9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey} unit=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#searchInput");
  return searchCity(searchElement.value);
}
function refreshWeather(response) {
  let timeElement = document.querySelector("#dateTime");
  let date = newDate(response.data.time * 1000);
  let temperatureElement = document.querySelector("#temperature-value");
  let cityElement = document.querySelector("#newCity");
  let informationElement = document.querySelector("#weather-information");
  let humidityElement = document.querySelector("#humidity");
  let iconElement = document.querySelector("#weather-emoji");
  let windSpeedElement = document.querySelector("#windSpeed");
  let temperature = response.data.temperature.current;

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  informationElement.innerHTML = response.data.condition.description;
  iconElement.innerHTML = (
    <img src="${response.data.condition.icon-url}" class="weather-emoji" />
  );
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  windSpeedElement.innerHTML = `${response.data.windSpeed}km/h`;
  timeElement.innerHTML = ` ${date} ${hours}:${minutes}| ${day}`;
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

  return ` ${date} ${hours}:${minutes}| ${day}`;
}

let searchInputElement = document.querySelector("#theForm");
searchInputElement.addEventListener("submit", handleSearch);
