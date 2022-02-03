import './sass/main.scss';
import { setAllDatas } from './modules/Storage';'./modules/Storage';
import { createCard, clearData, changeUnitF, changeUnitC, styleCF } from './modules/Paintdom';

const input = document.getElementById('input');
const btn = document.querySelector('.btn');
const cel = document.getElementById('c');
const fah = document.getElementById('f');

let map;
let lat = localStorage.getItem('lat') ? localStorage.getItem('lat') : 40.737;
let lng = localStorage.getItem('lng') ? localStorage.getItem('lng') : -73.923;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const weatherIcons = {
    'Clear': '☀',
    'Clouds': '☁',
    'Snow': '❄',
    'Rain': '🌧',
    'Haze': '🌫',
    'Fog': '🌫',
    'Drizzle': '🌦',
    'Mist': '🌫',
    'Thunderstorm': '⛈',
    'Dust': '🌪',
    'Smoke': '🌬'
};

map = L.map('map').setView([lat, lng], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .openPopup();

const temp = localStorage.getItem('temp') ? localStorage.getItem('temp') : '10';
const unit = localStorage.getItem('unit') ? localStorage.getItem('unit') : '°C';
const main = localStorage.getItem('main') ? localStorage.getItem('main') : 'Sunny';
const city = localStorage.getItem('city') ? localStorage.getItem('city') : 'New York';
const country = localStorage.getItem('country') ? localStorage.getItem('country') : 'US';
const date = localStorage.getItem('date') ? localStorage.getItem('date') : '2.19.2022';
const day = localStorage.getItem('day') ? localStorage.getItem('day') : 'Friday';


createCard(temp, unit, main, city, country, date, day);


async function getData(location, theunit) {
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Imperial&appid=804f73fec112865b52ba78935b0ca57b`, {mode: 'cors'});
    const data = await weatherData.json();
    const curlat = data.coord.lat;
    const curlng = data.coord.lon;
    lat = curlat;
    lng = curlng;
    localStorage.setItem('lat', curlat);
    localStorage.setItem('lng', curlng);
    map.flyTo([curlat, curlng], 12);
    setTimeout(() => {
        L.marker([lat, lng]).addTo(map)
        .openPopup();
    }, 5000)
    
    let temperature = Math.ceil((data.main.temp - 32) / 1.8);
    let unit = theunit; // Initially it will be celsius;
    const main = data.weather[0].main;
    const city = data.name;
    const country = data.sys.country;
    const icon = weatherIcons[main];
    let date = new Date();
    let day = weekday[date.getDay()];
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    
    date = mm + '.' + dd + '.' + yyyy;
    console.log(data);
    setAllDatas(temperature, unit, main, city, country, icon, date, day);
};

function injectData() {
    let temp = localStorage.getItem('temp');
    let unit = localStorage.getItem('unit');
    let main = localStorage.getItem('main');
    let city = localStorage.getItem('city');
    let country = localStorage.getItem('country');
    let day = localStorage.getItem('day');
    let date = localStorage.getItem('date');

    const parent = document.getElementById('card');
    parent.innerHTML = `
    <div class='cardOne'>
        <p id='day'>${date}</p>
        <p id='date'>${day}</p>
        <p id='location'>${city}, ${country} 📍</p>
    </div>

    <div class='cardTwo'>
        <div class='cardTwoContent'>
            <div id='one' class='cardTwoContentOne'>
                <h1 id='icon'>${weatherIcons[main]}</h1>
            </div>

            <div id='two' class='cardTwoContentTwo'>
                <h1 id='temp'>${temp}${unit}</h1>
            </div>

            <div id='three' class='cardTwoContentThree'>
                <h1 id='main'>${main}</h1>
            </div>
        </div>
    </div>

    <div class='cardThree'>
        <h1>
            hi
        </h1>
    </div>
    `
}

styleCF(cel, fah)

btn.addEventListener('click', () => {
    getData(input.value, unit);
    clearData();
    setTimeout(() => {
        injectData();
    }, 3000)
    input.value = '';
});

cel.addEventListener('click', () => {
    changeUnitC();
})

fah.addEventListener('click', () => {
    changeUnitF();
})


export { weatherIcons, cel, fah, main, city, country, date, day };