const display = document.querySelector(".display");

const animationPlayerDisplay = document.querySelectorAll(".animationPlayerDisplay");
const animationMachineDisplay = document.querySelector(".animationMachineDisplay");
const playerCounterDisplay =   document.querySelector(".playerCounterDisplay");
const machineCounterDisplay = document.querySelector(".machineCounterDisplay");
const click = new Audio('sounds/click.mp3');
const win = new Audio('sounds/win.mp3');
const lose = new Audio('sounds/lose.mp3');

let animationInterval;
let player;
let machineChoose;
let playerCounter = 0;
let machineCounter = 0;

function playGame (playerChoose) {

    click.currentTime = 0;
    const gameOptions = ['🪨', '📝', '✂️'];
    player = playerChoose;
    machineChoose = gameOptions[Math.floor(Math.random() * 3)];

    if(playerChoose === machineChoose) {

        display.textContent = "Draw";
        click.play();

    } else if(playerChoose === '🪨' && machineChoose === '✂️' || playerChoose === '📝' && machineChoose === '🪨' || playerChoose === '✂️' && machineChoose === '📝') {

        display.textContent = "You won !"
        playerCounter++;
        playerCounterDisplay.textContent = playerCounter;
        win.play();

        } else {
            display.textContent = "You lose !"
            machineCounter++;
            machineCounterDisplay.textContent = machineCounter;
            lose.play();
        }

    clearInterval(animationInterval);

    animationPlayerDisplay[0].textContent = player;
    animationPlayerDisplay[1].textContent = machineChoose;
}

function resetGame() {
    playerCounter = 0;
    machineCounter = 0;
    playerCounterDisplay.textContent = 0;
    machineCounterDisplay.textContent = 0;
    display.textContent = "Make your Choice"
    startAnimation();
}

function startAnimation () {
    animationInterval = setInterval(() => {

        animationPlayerDisplay.forEach(el => {
        if(el.textContent === "✂️") {
            el.textContent = "🪨";
            }else if(el.textContent === "🪨") {
                el.textContent = "📝";
            }else if(el.textContent === "📝") {
                el.textContent = "✂️";
            }})

    }, 500);
}

startAnimation();