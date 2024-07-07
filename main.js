// Define the weather data
const weatherData = {
    "paris": { tempC: 19.7,  humidity: 80 },
    "tokyo": { tempC: 17.3,  humidity: 50 },
    "lisbon": { tempC: 30.2,  humidity: 20 },
    "san fransisco": { tempC: 20.9,  humidity: 100 },
    "oslo": {tempC: -5, humidity: 20}
};

// Prompt the user to enter a city
const city = prompt("Enter a city");

// Check if the city exists in the weather data
if (weatherData[city]) {
    const { tempC, tempF, humidity } = weatherData[city];
    alert(`It is currently ${tempC}°C (${tempF}°F) in ${city} with a humidity of ${humidity}%`);
} else {
    alert(`Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city.toLowerCase()}`);
}
