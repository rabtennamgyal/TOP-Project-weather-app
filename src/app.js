import './sass/main.scss';

const input = document.getElementById('input');
const btn = document.querySelector('.btn');


async function getData(location) {
    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Imperial&appid=804f73fec112865b52ba78935b0ca57b`, {mode: 'cors'});
    const data = await weatherData.json();
    console.log(data.weather)
};

btn.addEventListener('click', () => {
    getData(input.value)
});
