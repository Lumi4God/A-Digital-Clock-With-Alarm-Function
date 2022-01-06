const message = document.querySelector("#message")

setInterval(()=> {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM"

    // Displays Good Morning from hours of 5 and 12 on the page
    if (hours > 5 && hours < 12) {
        message.innerHTML = "GOOD MORNING and have a lovely day!"
    }
    // Displays Good Afternoon from hours of 12 and 16 on the page
    if (hours > 12 && hours < 16) {
        message.innerHTML = "GOOD AFTERNOON and how are you?"
    }
    // Displays Good Evening from hours of 16 and 19 on the page
    if (hours > 16 && hours < 19) {
        message.innerHTML = "GOOD EVENING and how has your day been?"
    }
    // Displays it's night time from hours of 19 and 22 on the page
    if (hours > 19 && hours < 22) {
        message.innerHTML = "IT'S NIGHT TIME, enjoy the rest of the night!"
    }
    // Displays Good night from hours of 22 and 5 on the page
    if (hours > 22 && hours < 5) {
        message.innerHTML = "GOOD NIGHT and have a good night rest!"
    }
    if(hours > 12) {
        day_night = "PM";
        hours = hours - 12;
    }
    if(hours < 10) {
        hours = "0" + hours;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + ":" + day_night;
});

/////////////////////////////////////////////////////////////////////////////////////////////

// ALARM + SOUND
const audio = new Audio('Sound/mixkit-game.wav');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function setAlarmTime(value) {
    alarmTime = value;
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}