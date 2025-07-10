
const display = document.getElementById("display");
const answer = document.getElementById("answer");
let data;

async function randomJoke() {

    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    data = await response.json();
    display.innerText = data.setup;
    answer.innerText = "";
}

function jokeAnswer() {
    answer.innerText = data.punchline;
}