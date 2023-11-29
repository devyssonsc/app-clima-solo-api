const apiKey = "95efa740d2c65087ee8a19dfd32984c0";

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

const SearchCity = async (city) => {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt`)
    .then((res) => res.json())
    .then((data) => {
        return data;
    });
    return result
};

formSearchCity.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = formSearchCity.inputCity.value;
    const result = await SearchCity(city);
    console.log(result);
    nameCity.innerText = result.name;
    temp.innerText = Number(result.main.temp).toFixed(0) + "°";
    condition.innerText = result.weather[0].main;
    maxTemp.innerText = Number(result.main.temp_max).toFixed(0) + "°";
    minTemp.innerText = Number(result.main.temp_min).toFixed(0) + "°";
    windSpeed.innerText = Number(result.wind.speed).toFixed(0);
    humidity.innerText = result.main.humidity;
    visibility.innerText = (Number(result.visibility) / 1000).toFixed(0);

    informations.classList.remove("hidden");
    h1.classList.add("hidden");
    formSearchCity.inputCity.value = "";
});

