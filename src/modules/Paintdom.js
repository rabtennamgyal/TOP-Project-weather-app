import { weatherIcons, cel, fah, temp, unit, main, city, country, date, day  } from '../app';

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

function changeUnitC() {
    fah.style.color = 'grey';
    cel.style.color = 'white'
    let currentTemp = Math.trunc((localStorage.getItem('temp') - 32) / 1.8);
    let currentUnit = '°C';
    localStorage.setItem('temp', currentTemp);
    localStorage.setItem('unit', currentUnit);
    const parent = document.getElementById('card');

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    createCard(currentTemp, currentUnit, main, city, country, date, day);
}

function changeUnitF() {
    cel.style.color = 'grey';
    fah.style.color = 'white'
    let currentTemp = Math.trunc((localStorage.getItem('temp') * 1.8) + 32);
    let currentUnit = '°F';
    localStorage.setItem('temp', currentTemp);
    localStorage.setItem('unit', currentUnit);
    const parent = document.getElementById('card');

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    createCard(currentTemp, currentUnit, main, city, country, date, day);
}

export { createCard, clearData, changeUnitC, changeUnitF }
