export default async function weatherApi(city) {
    const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b27eae72d60a4188e9948147a0e31084`
    );
    const json = await data.json();
    return json;
}
