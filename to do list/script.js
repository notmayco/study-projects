const inputList = document.getElementById("inputList");
const addListBtn = document.getElementById("addListBtn");
const list = document.getElementById("list");

//Update Number Order on The List

function updateNumbers() {

    const items = list.children

    for(let i = 0; i < items.length; i++){

        const li = items[i];

        const textNode = li.querySelector("span");
        const trimText = textNode.textContent.trim();
        const textWithoutNumber = trimText.split(". ").slice(1).join(". ")
        textNode.textContent = (i + 1) + ". " + textWithoutNumber
        console.log(li)
    }
}

// Enter key Actives Input form

inputList.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        addTarefa();
    }
})

// Add a New Task to the List

function addTarefa() {
    const li = document.createElement("li")
    const span = document.createElement("span")
    if(inputList.value === "") {
        window.alert("You must add something in the input!")
    } else {
        span.textContent = list.children.length + 1 + ". " + inputList.value;
        li.appendChild(span)
        list.appendChild(li)
    }

    //Complete Task Button

    const marked = document.createElement("button")
    marked.textContent = "Completed"
    marked.classList.add("markedBtn")
    marked.onclick = () => {
        if(span.style.textDecoration === "") {
              span.style.textDecoration = "line-through"
        }
        else {
        span.style.textDecoration = ""
        }
    }
    li.appendChild(marked)

    //Delete Task Button

    const deletebtn = document.createElement("button")
    deletebtn.textContent = "Delete"
    deletebtn.classList.add("deleteBtn")
    deletebtn.onclick = () => {
        list.removeChild(li)
        updateNumbers();
    }
    li.appendChild(deletebtn)
}