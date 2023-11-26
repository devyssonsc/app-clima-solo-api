const formSearchCity = document.querySelector("#searchCity")
const nameCity = document.querySelector("#nameCity");
const temp = document.querySelector("#temp");
const condition = document.querySelector("#condition");
const maxTemp = document.querySelector("#maxTemp");
const minTemp = document.querySelector("#minTemp");
const windSpeed = document.querySelector("#windSpeed");
const humidity = document.querySelector("#humidity");
const visibility = document.querySelector("#visibility");
const informations = document.querySelector("#informations");
const h1 = document.querySelector("h1");

const SearchCity = (city) => {
    const result = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=95efa740d2c65087ee8a19dfd32984c0&lang=pt`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    });
    console.log(result)
    return result
};

formSearchCity.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = formSearchCity.inputCity.value;
    SearchCity(city).then((data) => {
        console.log(data);
        nameCity.innerText = data.name;
        temp.innerText = Number(data.main.temp).toFixed(0) + "°";
        condition.innerText = data.weather[0].main;
        maxTemp.innerText = Number(data.main.temp_max).toFixed(0) + "°";
        minTemp.innerText = Number(data.main.temp_min).toFixed(0) + "°";
        windSpeed.innerText = Number(data.wind.speed).toFixed(0);
        humidity.innerText = data.main.humidity;
        visibility.innerText = (Number(data.visibility) / 1000).toFixed(0);
    });

    informations.classList.remove("hidden");
    h1.classList.add("hidden");
    formSearchCity.inputCity.value = "";
});

