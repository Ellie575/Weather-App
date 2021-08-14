let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let h1 = document.querySelector("h1");
let currentDateAndTime = document.querySelector("#current-date-and-time");

currentDateAndTime.innerHTML = `${day}, ${hour}:${minutes}`;

function displayCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  console.log(city);
  let cityLocation = document.querySelector("#city");
  cityLocation.innerHTML = `${city}`;
  searchCity(city);
}

function searchCity(city) {
  let apiKey = "56e0818fd22a5efa4a6c31eab2ac96a0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
}

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = `${temperature}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", displayCity);
