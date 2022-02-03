import { weatherIcons, cel, fah, main, city, country, date, day } from '../app';
import { setStyle } from './Storage';


function createCard(temp, unit, main, city, country, date, day) {
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

    localStorage.setItem('temp', currentTemp);
    localStorage.setItem('unit', currentUnit);
    const parent = document.getElementById('card');
    
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    createCard(currentTemp, currentUnit, main, city, country, date, day);
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

    localStorage.setItem('unit', '°F');
    localStorage.setItem('temp', currentTemp);
    localStorage.setItem('unit', currentUnit);
    const parent = document.getElementById('card');

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    createCard(currentTemp, currentUnit, main, city, country, date, day);
}

function styleCF(cel, fah) {
    let cColor = localStorage.getItem('cstyle');
    let fColor = localStorage.getItem('fstyle');
    cel.style.color = cColor;
    fah.style.color = fColor;
}

export { createCard, clearData, changeToCelsius, changeToFahrenheit, styleCF };