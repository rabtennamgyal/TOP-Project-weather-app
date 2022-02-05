import { weatherIcons, cel, fah, main, city, country, date, day, desc } from '../app';
import { setStyle, setCard } from './Storage';


function createCard(temp, unit, main, city, country, date, day, desc) {
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
        <p id='desc'>${desc}</p>
    </div>
    `
}

function clearData() {
    const parent = document.getElementById('card');

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeToCelsius() {
    fah.style.color = 'grey';
    cel.style.color = 'white'
    setStyle('white', 'grey');

    const currentTemp = Number(Math.ceil((localStorage.getItem('fah') - 32 ) / 1.8));
    const currentUnit = '°C';
    const main = localStorage.getItem('main');
    const city = localStorage.getItem('city');
    const country = localStorage.getItem('country');
    const date = localStorage.getItem('date');
    const day = localStorage.getItem('day');
    const desc = localStorage.getItem('desc');

    localStorage.setItem('temp', currentTemp);
    localStorage.setItem('unit', currentUnit);
    const parent = document.getElementById('card');
    
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    createCard(currentTemp, currentUnit, main, city, country, date, day, desc);
}

function changeToFahrenheit() {
    cel.style.color = 'grey';
    fah.style.color = 'white'
    setStyle('grey', 'white');
    
    const currentTemp = Number(Math.ceil(localStorage.getItem('cel') * 1.8) + 32);
    const currentUnit = '°F';
    const main = localStorage.getItem('main');
    const city = localStorage.getItem('city');
    const country = localStorage.getItem('country');
    const date = localStorage.getItem('date');
    const day = localStorage.getItem('day');
    const desc = localStorage.getItem('desc');

    localStorage.setItem('unit', '°F');
    localStorage.setItem('temp', currentTemp);
    localStorage.setItem('unit', currentUnit);
    const parent = document.getElementById('card');

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    createCard(currentTemp, currentUnit, main, city, country, date, day, desc);
}

function styleCF(cel, fah) {
    let cColor = localStorage.getItem('cstyle');
    let fColor = localStorage.getItem('fstyle');
    cel.style.color = cColor;
    fah.style.color = fColor;
}

function injectLoader() {
    const parent = document.getElementById('card');
    const loader = document.createElement('div');
    loader.classList.add('loader');
    parent.appendChild(loader);
}

function injectBackground(main) {
    const card = document.getElementById('card');

    if (main === 'Clear') {
        card.style.backgroundImage = "url('../../img/weathers/clearWeather.jpeg')";
        card.style.backgroundSize = "cover";
        setCard("url('../../img/weathers/clearWeather.jpeg')", "cover");
    }

    if (main === 'Clouds') {
        card.style.backgroundImage = "url('../../img/weathers/clouds.jpg')";
        card.style.backgroundSize = "cover";
        setCard("url('../../img/weathers/clouds.jpg')", "cover");
    }

    if (main === 'Snow') {
        card.style.backgroundImage = "url('../../img/weathers/snowWeather.jpg')";
        card.style.backgroundSize = "contain";
        setCard("url('../../img/weathers/snowWeather.jpg')", "contain");
    }

    if (main === 'Rain' || main === 'Drizzle' || main === 'Thunderstorm') {
        card.style.backgroundImage = "url('../../img/weathers/rain.jpg')";
        card.style.backgroundSize = "cover";
        setCard("url('../../img/weathers/rain.jpg')", "cover");
    }

    if (main === 'Haze' || main === 'Fog' || main === 'Mist') {
        card.style.backgroundImage = "url('../../img/weathers/mist.jpg')";
        card.style.backgroundSize = "cover";
        setCard("url('../../img/weathers/mist.jpg')", "cover");
    }

    if (main === 'Dust' || main === 'Smoke') {
        card.style.backgroundImage = "url('../../img/weathers/dust.jpg')";
        card.style.backgroundSize = "cover";
        setCard("url('../../img/weathers/dust.jpg')", "cover");
    }

}

function setBackground(img, pos) {
    const card = document.getElementById('card');
    card.style.backgroundImage = `${img}`;
    card.style.backgroundSize =  `${pos}`;
}

export { 
    createCard, clearData, changeToCelsius, 
    changeToFahrenheit, styleCF, injectLoader, 
    injectBackground, setBackground 
};