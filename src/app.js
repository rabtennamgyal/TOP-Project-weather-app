import './sass/main.scss';

const input = document.getElementById('input');
const btn = document.querySelector('.btn');

let map;
let lat = localStorage.getItem('lat') ? localStorage.getItem('lat') : 40.737;
let lng = localStorage.getItem('lng') ? localStorage.getItem('lng') : -73.923;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

map = L.map('map').setView([lat, lng], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .openPopup();



function setAllDatas(temp, wind, main, city, country) {
    localStorage.setItem('temp', temp);
    localStorage.setItem('wind', wind);
    localStorage.setItem('main', main);
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
    const city = data.name;
    const country = data.sys.country;

    setAllDatas(temperature, wind, main, city, country);
};

function injectData() {
    let temp = localStorage.getItem('temp');
    let wind = localStorage.getItem('wind');
    let main = localStorage.getItem('main');
    let city = localStorage.getItem('city');
    let country = localStorage.getItem('country');
    let today = new Date();
    let day = weekday[today.getDay()];
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    today = mm + '.' + dd + '.' + yyyy;


    const parent = document.getElementById('card');
    parent.innerHTML = `
    <div class='cardOne'>
        <p id='day'>${day}</p>
        <p id='date'>${today}</p>
        <p id='location'>${city}, ${country} 📍</p>
    </div>

    <div class='cardTwo'>
        <div class='cardTwoContent'>
            <div id='one' class='cardTwoContentOne'>
                <h1 id='icon'>☀</h1>
            </div>

            <div id='two' class='cardTwoContentTwo'>
                <h1 id='temp'>${temp} °C</h1>
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

    // const h1 = document.createElement('h1');
    // h1.classList.add('cardStyle');
    // h1.textContent = `${temp} `;

    // const h2 = document.createElement('h1');
    // h2.classList.add('cardStyle');
    // h2.textContent = `${wind} km/h`;

    // const h3 = document.createElement('h1');
    // h3.classList.add('cardStyle');
    // h3.textContent = main;

    // const h4 = document.createElement('h1');
    // h4.classList.add('cardStyle');
    // h4.textContent = description;

    // const h5 = document.createElement('h1');
    // h5.classList.add('cardStyle');
    // h5.textContent = `${city}, ${country}`

    // parent.appendChild(h1)
    // parent.appendChild(h2)
    // parent.appendChild(h3)
    // parent.appendChild(h4)
    // parent.appendChild(h5)
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
    setTimeout(() => {
        injectData();
    }, 3000)
    input.value = '';
});