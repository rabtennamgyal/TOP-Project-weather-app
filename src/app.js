import './sass/main.scss';

const input = document.getElementById('input');
const btn = document.querySelector('.btn');

let map;
let lat = localStorage.getItem('lat') ? localStorage.getItem('lat') : 40.737;
let lng = localStorage.getItem('lng') ? localStorage.getItem('lng') : -73.923;

map = L.map('map').setView([lat, lng], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .openPopup();



function setAllDatas(temp, wind, main, description, city, country) {
    localStorage.setItem('temp', temp);
    localStorage.setItem('wind', wind);
    localStorage.setItem('main', main);
    localStorage.setItem('desc', description);
    localStorage.setItem('city', city);
    localStorage.setItem('country', country)
}


async function getData(location) {
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
    
    const temperature = Math.trunc((data.main.temp - 32) / 1.8);
    const wind = data.wind.speed;
    const main = data.weather[0].main;
    const description = data.weather[0].description;
    const city = data.name;
    const country = data.sys.country;

    setAllDatas(temperature, wind, main, description, city, country);
};

function injectData() {
    let temp = localStorage.getItem('temp');
    let wind = localStorage.getItem('wind');
    let main = localStorage.getItem('main');
    let description = localStorage.getItem('desc');
    let city = localStorage.getItem('city');
    let country = localStorage.getItem('country');

    const parent = document.getElementById('card');

    const h1 = document.createElement('h1');
    h1.classList.add('cardStyle');
    h1.textContent = temp;

    const h2 = document.createElement('h1');
    h2.classList.add('cardStyle');
    h2.textContent = wind;

    const h3 = document.createElement('h1');
    h3.classList.add('cardStyle');
    h3.textContent = main;

    const h4 = document.createElement('h1');
    h4.classList.add('cardStyle');
    h4.textContent = description;

    const h5 = document.createElement('h1');
    h5.classList.add('cardStyle');
    h5.textContent = city;

    const h6 = document.createElement('h1');
    h6.classList.add('cardStyle');
    h6.textContent = country;

    parent.appendChild(h1)
    parent.appendChild(h2)
    parent.appendChild(h3)
    parent.appendChild(h4)
    parent.appendChild(h5)
    parent.appendChild(h6)
}

function clearData() {
    const parent = document.getElementById('card');

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

btn.addEventListener('click', () => {
    getData(input.value);
    clearData();
    injectData();
    input.value = '';
});

