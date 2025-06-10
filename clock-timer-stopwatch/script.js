
// Code For The Real Time Clock


setInterval(() => {

    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const date = new Date()

    hours.textContent = String(date.getHours()).padStart(2, "0");
    minutes.textContent = String(date.getMinutes()).padStart(2, "0");
    seconds.textContent = String(date.getSeconds()).padStart(2, "0");

}, 1000);

//Code For the TImer
const hoursDisplay = document.querySelector(".hoursDisplay");
const minutesDisplay = document.querySelector(".minutesDisplay");
const secondsDisplay = document.querySelector(".secondsDisplay");
const timerHours = document.getElementById("timerHours");
const timerMinutes = document.getElementById("timerMinutes");
const timerSeconds = document.getElementById("timerSeconds");


let timerInterval;
let totalTime = 0;

function startTimer() {

    let hours = parseInt(timerHours.value)  || 0;
    let minutes = parseInt(timerMinutes.value) || 0;
    let seconds = parseInt(timerSeconds.value) || 0;

    if (hours === 0 && minutes === 0  && seconds === 0) {
        window.alert("Please put some number to the timer!")
    }

    if(totalTime === 0) {
        totalTime = (hours * 3600) + (minutes * 60) + seconds;
    }

    clearInterval(timerInterval);

    timerInterval = setInterval( () => {
        let h = String((Math.floor(totalTime / 3600))).padStart(2, "0");
        let m = String(Math.floor((totalTime % 3600) / 60)).padStart(2, "0");
        let s = String((totalTime % 60)).padStart(2, "0");

        hoursDisplay.textContent = h;
        minutesDisplay.textContent = m;
        secondsDisplay.textContent = s;

        totalTime--;

        if(totalTime < 0) {
            window.alert("The timer is over!")
            clearInterval(timerInterval)
        }

    }, 1000);


}

function stopTimer() {

    clearInterval(timerInterval);

}

function resetTimer() {

    clearInterval(timerInterval);
    totalTime = 0;
    hoursDisplay.textContent = "00";
    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";
    timerHours.value = "";
    timerMinutes.value = "";
    timerSeconds.value = "";
}

// Code for Stop Watch

const watchMinutesDisplay = document.querySelector(".watchMinutes");
const watchSecondsDisplay = document.querySelector(".watchSeconds");
const watchMilSecondsDisplay = document.querySelector(".watchMilSeconds");

let watchInterval;
let watchMinutes = 0;
let watchSeconds = 0;
let watchMilSeconds = 0;

function watchStart() {
     watchInterval = setInterval(() => {

        watchMilSeconds++;

        if(watchMilSeconds >= 100) {
            watchMilSeconds = 0;
            watchSeconds++;
        }
        if(watchSeconds >= 60) {
            watchSeconds = 0;
            watchMinutes++;
        }

        watchMilSecondsDisplay.textContent = watchMilSeconds;
        watchSecondsDisplay.textContent = watchSeconds;
        watchMinutesDisplay.textContent = watchMinutes;

    }, 10);
}

function watchStop() {
    clearInterval(watchInterval);
}

function watchReset() {
    clearInterval(watchInterval)

    watchMinutes = 0;
    watchSeconds = 0;
    watchMilSeconds = 0;

    watchMilSecondsDisplay.textContent = "00";
    watchSecondsDisplay.textContent = "00";
    watchMinutesDisplay.textContent = "00";

}

