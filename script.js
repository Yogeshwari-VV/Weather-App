const apiKey = "9c8105e1410242056e40df9c8a29ee54";

document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    getWeather(city);
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found or API issue");
        }

        const data = await response.json();

        document.getElementById("weatherBox").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Feels Like:</strong> ${data.main.feels_like}°C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Weather:</strong> ${data.weather[0].main}</p>
        `;
    } catch (error) {
        document.getElementById("weatherBox").innerHTML = `<p class="error">❌ Error: ${error.message}</p>`;
    }
}
