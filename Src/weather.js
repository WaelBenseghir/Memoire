const cityInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const cityNotFound = document.querySelector(".search-city-not-found");
const cityFound = document.querySelector(".search-city");
const weatherInfo = document.querySelector(".main");
const tempTxt = document.querySelector(".temp-txt");
const weatherDesc = document.querySelector(".forecast-desc");
const locationTxt = document.querySelector(".location-txt");
const dateTxt = document.querySelector(".date-txt");
const windTxt = document.querySelector(".wind-value-txt");
const humidTxt = document.querySelector(".humid-value-txt");
const forecastDate = document.querySelector(".forecast-date");
const searchImg = document.querySelector(".search-img");
const forecastContainer = document.querySelector(".flex-group");
const farmingTips = document.querySelector(".farmingTips");

const apiKey = "bf42771105c7533cb3339cc4a0b54939";

searchButton.addEventListener("click", () => {
  if (cityInput.value.trim() != "") {
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});

cityInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter" && cityInput.value.trim() != "") {
    updateWeatherInfo(cityInput.value);
    cityInput.value = "";
    cityInput.blur();
  }
});

async function getFetchData(endPoint, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  return response.json();
}

function getCurrentDate() {
  const currentDate = new Date();
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };

  return currentDate.toLocaleDateString("en-GB", options);
}

async function updateWeatherInfo(city) {
  const weatherData = await getFetchData("weather", city);
  if (weatherData.cod != 200) {
    showDisplaySection(cityNotFound);
    return;
  }

  const {
    name: country,
    main: { temp, humidity },
    weather: [{ main, id }],
    wind: { speed },
  } = weatherData;

  locationTxt.textContent = country;
  tempTxt.textContent = Math.round(temp);
  weatherDesc.textContent = main;
  windTxt.textContent = speed + "km/h";
  humidTxt.textContent = humidity + "%";
  farmingTips.textContent = getFarmingTip( main, id);
  dateTxt.textContent = getCurrentDate();
  await updateForecastInfo(city);

  showDisplaySection(weatherInfo);
}


async function updateForecastInfo(city) {
  const forecastData = await getFetchData("forecast", city);
  const timeTaken = "12:00:00";

  forecastContainer.innerHTML = "";

  let forecastDays = new Set();
  let lastAvailableForecast = null;

  forecastData.list.forEach((forecastWeather) => {
    const date = forecastWeather.dt_txt.split(" ")[0];

    if (forecastWeather.dt_txt.includes(timeTaken) && !forecastDays.has(date)) {
      updateforecastItems(forecastWeather);
      forecastDays.add(date);
      lastAvailableForecast = forecastWeather;
    }

    if (forecastDays.size === 5) return;
  });

  if (lastAvailableForecast) {
    for (let i = 1; i <= 1; i++) {
      let nextDate = new Date(lastAvailableForecast.dt_txt);
      nextDate.setDate(nextDate.getDate() + i);

      updateforecastItems({
        dt_txt: nextDate.toISOString().split("T")[0] + " " + timeTaken,
        weather: lastAvailableForecast.weather,
        main: lastAvailableForecast.main,
      });
    }
  }
}

function updateforecastItems(weatherData) {
  const {
    dt_txt: date,
    weather: [{ main }],
    main: { temp },
  } = weatherData;

  const dateTaken = new Date(date);
  const dateResult = dateTaken.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

  const forecastItem = `
        <div class="weather-card">
            <h4 class="forecast-date">${dateResult}</h4>
            <h5 class="temp-txt">${Math.round(temp)}
            <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 12 12">
                    <path fill="#3E3E3E" fill-rule="evenodd"
                    d="M6 12A6 6 0 1 1 6 0a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                    clip-rule="evenodd" />
            </svg></h5>
            <p class="forecast-desc">${main}</p>
        </div>
    `;
  forecastContainer.insertAdjacentHTML("beforeend", forecastItem);
}

function showDisplaySection(section) {
  [weatherInfo, cityFound, cityNotFound].forEach(
    (section) => (section.style.display = "none")
  );
  section.style.display = "block";
}

function getFarmingTip(weatherMain, weatherId) {
  const tips = {
    Thunderstorm: "⚠️ Secure equipment and shelter livestock immediately!",
    Drizzle: "🌧️ Reduce irrigation - natural moisture available",
    Rain: "🚜 Avoid field work - check drainage systems",
    Snow: "❄️ Protect sensitive crops and animals from freezing",
    Clear: "☀️ Ideal for harvesting and drying crops",
    Clouds: "⛅ Monitor for pests in these conditions",
    Atmosphere: "🌫️ Delay pesticide applications due to poor visibility",
  };

  if (weatherId >= 200 && weatherId <= 232) {
    return "⛈️ EMERGENCY: Lightning risk! Unplug all equipment.";
  }
  if (weatherId >= 502 && weatherId <= 504) {
    return "🌧️ WARNING: Heavy rain expected! Check flood defenses.";
  }
  if (weatherId >= 600 && weatherId <= 622) {
    return "❄️ SNOW ALERT: Insulate shelters and check water supplies.";
  }

  return tips[weatherMain] || "🌾 Normal farming operations can continue.";
}
