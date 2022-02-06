function setAllDatas(temp, unit, main, city, country, icon, date, day, desc) {
    localStorage.setItem('temp', temp);
    localStorage.setItem('unit', unit);
    localStorage.setItem('main', main);
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
    localStorage.setItem('icon', icon);
    localStorage.setItem('date', date);
    localStorage.setItem('day', day);
    localStorage.setItem('desc', desc);
}

function setStyle(cel, fah) {
    localStorage.setItem('cstyle', cel);
    localStorage.setItem('fstyle', fah)
}

function saveBothTemp(cel, fah) {
    localStorage.setItem('cel', cel);
    localStorage.setItem('fah', fah);
}

export { setAllDatas, setStyle, saveBothTemp }
