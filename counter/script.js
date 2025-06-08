const display = document.querySelector(".counter");
const negative = document.querySelector(".negative")
let number = 0;
let toggle = false;

function incrementBtn () {
    number++;
    display.textContent = number
}

function decrementBtn() {
    if(toggle === false && number <= 0) {
        window.alert("The counter can't be negative");
        number = 0;
        display.textContent = number;
    } else {
        number--;
        display.textContent = number
    }
}

function resetBtn() {
    number = 0;
    display.textContent = number;
}

function toggleBtn() {
    toggle = !toggle
    if(toggle === true) {
        negative.style.backgroundColor = "aquamarine"
    } else {
        negative.style.backgroundColor = "#e2c6e2"
    }
}

