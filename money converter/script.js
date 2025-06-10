const moneyInput = document.getElementById("moneyInput");
const display = document.querySelector(".display");
let selectedConversion = "";

function changeCurrency() {

    let result = parseInt(moneyInput.value)

    switch(selectedConversion) {
        case "real-dolar":
            result = result / 5;
            break
        case "dolar-real":
            result = result * 5;
            break
        case "real-euro":
            result = result / 7;
            break
        case "euro-real":
            result = result * 7;
            break
        case "dolar-euro":
            result = result * 0.8;
            break
        case "euro-dolar":
            result = result / 0.8;
            break
        default:
            display.textContent = "Choose a conversion."
            return;
    }

    display.textContent = result;

}

function realToDolar () { selectedConversion = "real-dolar"; }
function dolarToReal () { selectedConversion = "dolar-real"; }
function realToEuro () { selectedConversion = "real-euro"; }
function euroToReal () { selectedConversion = "euro-real"; }
function dolarToEuro () { selectedConversion = "dolar-euro"; }
function euroToDolar () { selectedConversion = "euro-dolar"; }
