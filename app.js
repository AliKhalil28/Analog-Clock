setInterval(() => {
    date = new Date();
    let dhour = date.getHours();
    let dminute = date.getMinutes();
    let dsecond = date.getSeconds();
    hrotation = 30 * dhour + dminute / 2;
    mrotation = 6 * dminute;
    srotation = 6 * dsecond;

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000)