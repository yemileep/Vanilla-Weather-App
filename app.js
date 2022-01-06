function formatDate(timestamp) {
  let date = new Date(timestamps)
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
 }
 
 
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  
}
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.get()];
  return `${day} ${hours}:${minutes}`;
  
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature")
  let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(respose.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(respose.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = "New York";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(displayTemperature);
