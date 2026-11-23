function setCookie(key, value, seconds) {
    const d = new Date();
    d.setTime(d.getTime() + seconds * 1000);

    let expires = "expires=" + d.toUTCString();

    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

function getCookieValue(key) {
    let name = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);

    let components = decodedCookie.split(';');

    for (let i = 0; i < components.length; i++) {
        let section = components[i];
        while (section.charAt(0) == " ") {
            section = section.substring(1);

            if (section.indexOf(name) == 0) {
                return section.substring(name.length, section.length);
            }
        }
    }
    return "";
}
const weatherCodes = {
    "0": {
        "day": { "description": "Sunny", "image": "https://openweathermap.org/img/wn/01d@2x.png" },
        "night": { "description": "Clear", "image": "https://openweathermap.org/img/wn/01n@2x.png" }
    },
    "1": {
        "day": { "description": "Mainly Sunny", "image": "https://openweathermap.org/img/wn/01d@2x.png" },
        "night": { "description": "Mainly Clear", "image": "https://openweathermap.org/img/wn/01n@2x.png" }
    },
    "2": {
        "day": { "description": "Partly Cloudy", "image": "https://openweathermap.org/img/wn/02d@2x.png" },
        "night": { "description": "Partly Cloudy", "image": "https://openweathermap.org/img/wn/02n@2x.png" }
    },
    "3": {
        "day": { "description": "Cloudy", "image": "https://openweathermap.org/img/wn/03d@2x.png" },
        "night": { "description": "Cloudy", "image": "https://openweathermap.org/img/wn/03n@2x.png" }
    },
    "45": {
        "day": { "description": "Foggy", "image": "https://openweathermap.org/img/wn/50d@2x.png" },
        "night": { "description": "Foggy", "image": "https://openweathermap.org/img/wn/50n@2x.png" }
    },
    "48": {
        "day": { "description": "Rime Fog", "image": "https://openweathermap.org/img/wn/50d@2x.png" },
        "night": { "description": "Rime Fog", "image": "https://openweathermap.org/img/wn/50n@2x.png" }
    },
    "51": {
        "day": { "description": "Light Drizzle", "image": "https://openweathermap.org/img/wn/09d@2x.png" },
        "night": { "description": "Light Drizzle", "image": "https://openweathermap.org/img/wn/09n@2x.png" }
    },
    "53": {
        "day": { "description": "Drizzle", "image": "https://openweathermap.org/img/wn/09d@2x.png" },
        "night": { "description": "Drizzle", "image": "https://openweathermap.org/img/wn/09n@2x.png" }
    },
    "55": {
        "day": { "description": "Heavy Drizzle", "image": "https://openweathermap.org/img/wn/09d@2x.png" },
        "night": { "description": "Heavy Drizzle", "image": "https://openweathermap.org/img/wn/09n@2x.png" }
    },
    "56": {
        "day": { "description": "Light Freezing Drizzle", "image": "https://openweathermap.org/img/wn/09d@2x.png" },
        "night": { "description": "Light Freezing Drizzle", "image": "https://openweathermap.org/img/wn/09n@2x.png" }
    },
    "57": {
        "day": { "description": "Freezing Drizzle", "image": "https://openweathermap.org/img/wn/09d@2x.png" },
        "night": { "description": "Freezing Drizzle", "image": "https://openweathermap.org/img/wn/09n@2x.png" }
    },
    "61": {
        "day": { "description": "Light Rain", "image": "https://openweathermap.org/img/wn/10d@2x.png" },
        "night": { "description": "Light Rain", "image": "https://openweathermap.org/img/wn/10n@2x.png" }
    },
    "63": {
        "day": { "description": "Rain", "image": "https://openweathermap.org/img/wn/10d@2x.png" },
        "night": { "description": "Rain", "image": "https://openweathermap.org/img/wn/10n@2x.png" }
    },
    "65": {
        "day": { "description": "Heavy Rain", "image": "https://openweathermap.org/img/wn/10d@2x.png" },
        "night": { "description": "Heavy Rain", "image": "https://openweathermap.org/img/wn/10n@2x.png" }
    },
    "66": {
        "day": { "description": "Light Freezing Rain", "image": "https://openweathermap.org/img/wn/10d@2x.png" },
        "night": { "description": "Light Freezing Rain", "image": "https://openweathermap.org/img/wn/10n@2x.png" }
    },
    "67": {
        "day": { "description": "Freezing Rain", "image": "https://openweathermap.org/img/wn/10d@2x.png" },
        "night": { "description": "Freezing Rain", "image": "https://openweathermap.org/img/wn/10n@2x.png" }
    },
    "71": {
        "day": { "description": "Light Snow", "image": "https://openweathermap.org/img/wn/13d@2x.png" },
        "night": { "description": "Light Snow", "image": "https://openweathermap.org/img/wn/13n@2x.png" }
    },
    "73": {
        "day": { "description": "Snow", "image": "https://openweathermap.org/img/wn/13d@2x.png" },
        "night": { "description": "Snow", "image": "https://openweathermap.org/img/wn/13n@2x.png" }
    },
    "75": {
        "day": { "description": "Heavy Snow", "image": "https://openweathermap.org/img/wn/13d@2x.png" },
        "night": { "description": "Heavy Snow", "image": "https://openweathermap.org/img/wn/13n@2x.png" }
    },
    "77": {
        "day": { "description": "Snow Grains", "image": "https://openweathermap.org/img/wn/13d@2x.png" },
        "night": { "description": "Snow Grains", "image": "https://openweathermap.org/img/wn/13n@2x.png" }
    },
    "80": {
        "day": { "description": "Light Showers", "image": "https://openweathermap.org/img/wn/09d@2x.png" },
        "night": { "description": "Light Showers", "image": "https://openweathermap.org/img/wn/09n@2x.png" }
    },
    "81": {
        "day": { "description": "Showers", "image": "https://openweathermap.org/img/wn/09d@2x.png" },
        "night": { "description": "Showers", "image": "https://openweathermap.org/img/wn/09n@2x.png" }
    },
    "82": {
        "day": { "description": "Heavy Showers", "image": "https://openweathermap.org/img/wn/09d@2x.png" },
        "night": { "description": "Heavy Showers", "image": "https://openweathermap.org/img/wn/09n@2x.png" }
    },
    "85": {
        "day": { "description": "Light Snow Showers", "image": "https://openweathermap.org/img/wn/13d@2x.png" },
        "night": { "description": "Light Snow Showers", "image": "https://openweathermap.org/img/wn/13n@2x.png" }
    },
    "86": {
        "day": { "description": "Snow Showers", "image": "https://openweathermap.org/img/wn/13d@2x.png" },
        "night": { "description": "Snow Showers", "image": "https://openweathermap.org/img/wn/13n@2x.png" }
    },
    "95": {
        "day": { "description": "Thunderstorm", "image": "https://openweathermap.org/img/wn/11d@2x.png" },
        "night": { "description": "Thunderstorm", "image": "https://openweathermap.org/img/wn/11n@2x.png" }
    },
    "96": {
        "day": { "description": "Light Thunderstorms With Hail", "image": "https://openweathermap.org/img/wn/11d@2x.png" },
        "night": { "description": "Light Thunderstorms With Hail", "image": "https://openweathermap.org/img/wn/11n@2x.png" }
    },
    "99": {
        "day": { "description": "Thunderstorm With Hail", "image": "https://openweathermap.org/img/wn/11d@2x.png" },
        "night": { "description": "Thunderstorm With Hail", "image": "https://openweathermap.org/img/wn/11n@2x.png" }
    }
};

const loader = document.getElementById("loader");

function PrepareContent(obj) {
    let content = `
        <div class="info-grid">
            <div class="left-col">
                <p>${obj.cityName}</p>
                <p>${obj.country}</p>
                <p>${obj.temperature}°C</p>
                <p>${obj.mercury}</p>
                <p>${obj.timeDay}</p>

            </div>

            <div class="right-col">
                <p>${obj.condition}</p>
                <div class="icon-box">
                    <img src="${obj.image}" alt="${obj.condition}">
                </div>
                <p>${obj.time}</p>
                <p>${obj.date}</p>
            </div>
        </div>
    `;
    return content;
}

function GetWeatherByCoords(cityName, country, lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day,surface_pressure`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        const current = data.current;

        const weatherBox = document.querySelector(".weather-box");
        if (current.is_day === 0) {
            weatherBox.classList.add("night-mode");
        } else {
            weatherBox.classList.remove("night-mode");

        }

        const code = String(current.weather_code);
        const period = current.is_day === 1 ? "day" : "night";
        const codeInfo = weatherCodes[code] ? weatherCodes[code][period] : {
            description: "Unknown",
            image: ""
        };

        const mmHg = Math.round(current.surface_pressure * 0.750062) + " mmHg";
        const parts = current.time.split("T");
        const datePart = parts[0];
        const timePart = parts[1];

        const info = {
            cityName: cityName,
            country: country,
            temperature: Math.round(current.temperature_2m),
            mercury: mmHg,
            condition: codeInfo.description,
            image: codeInfo.image,
            time: timePart,
            date: datePart,
            timeDay: period.charAt(0).toUpperCase() + period.slice(1)
        };
        const infoJson = JSON.stringify(info);
        setCookie("weather1", infoJson, 2000);

        const section = document.getElementById("result");
        section.innerHTML = PrepareContent(info);
        loader.style.display = "none";
    };

    xhr.onerror = () => {
        loader.style.display = "none";
        console.log("Weather request error");
    };

    xhr.send();
}


async function GetWeather() {
    const city = document.getElementById("city").value.trim();
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = () => {
        const geoData = JSON.parse(xhr.responseText);

        if (!geoData.results || geoData.results.length === 0) {
            document.getElementById("result").innerHTML = "<p>City not found</p>";
            loader.style.display = "none";
            return;
        }

        const place = geoData.results[0];
        GetWeatherByCoords(place.name, place.country, place.latitude, place.longitude);
    };

    xhr.onerror = () => {
        loader.style.display = "none";
        console.log("Geocoding request error");
    };

    xhr.send();
}


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function GetWeatherLastCall() {
    loader.style.display = "block";
    await delay(2000);
    const section = document.getElementById("result");
    
    const lastSearch = await getCookieValue("weather1");
    loader.style.display = "none";
    if(lastSearch==""){
        section.innerHTML = "<p>Last search not found</p>";
        return;
    }
    const resultObj = JSON.parse(lastSearch);
    section.innerHTML = PrepareContent(resultObj);
    const weatherBox = document.querySelector(".weather-box");
    (resultObj.timeDay == "Night") ? weatherBox.classList.add("night-mode") : weatherBox.classList.remove("night-mode");

}

async function GetWeatherCall() {
    loader.style.display = "block";
    GetWeather()
        .then(() => {
            console.log("Ended");
        });
}