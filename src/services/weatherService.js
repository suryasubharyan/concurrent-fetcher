const fetchWithRetry = require('../utils/fetchWithRetry');

async function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`;

    try {
        const response = await fetchWithRetry(url);
        return {
            location: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description
        };
    } catch (error) {
        return { error: 'Weather data not available'};
        }
    }


module.exports  = { fetchWeather };