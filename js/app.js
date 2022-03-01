// Call API for weather temperature
const loadData = () => {
    const inputField = document.getElementById('city-field');
    const cityName = inputField.value;
    const API_KEY = `6354f4482901ce51c6b0bd6c3e6c69ab`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
        .catch(error => console.log(error));
};

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
};

// Update display data
const displayData = (data) => {
    const icon = document.getElementById('icon');
    const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log(data);
    setInnerText('city', data.name)
    setInnerText('weather-temp', data.main.temp)
    setInnerText('condition', data.weather[0].main)
    icon.setAttribute('src', weatherIcon);
}