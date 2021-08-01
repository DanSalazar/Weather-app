const API_KEY = 'b27eae72d60a4188e9948147a0e31084';

export default async function weatherApi(city) {
    const weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const weather = await weatherData.json();
    const { coord } = weather;
    const forecastData = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely,alerts&appid=${API_KEY}&units=metric`
    );
    const currentWeather = await forecastData.json();

    return currentWeather;
}
