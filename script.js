// Project-Etch-a-Sketch.git
const screenSize = 960;
const button = document.querySelector(".button")
const container = document.querySelector(".container")

 // set Resolution

function setResolution() {
    let resInputRaw = document.querySelector(".resinput");
    let resInput = Number(resInputRaw.value);
    if (isNaN(resInput) || resInput < 1 || resInput > 100) {
        alert("Bitte gib eine gültige Zahl zwischen 1 und 100 ein.");
        return;
    }
    let squareWidth = (screenSize / resInput);
    let Resolution = (resInput * resInput)
    container.innerHTML = ""
    for (let index = 0; index < Resolution; index++) {
        const squares = document.createElement("div");
        squares.classList.add("square");
        squares.style.width = `${squareWidth}px`;
        squares.style.height = `${squareWidth}px`;
        squares.style.flex = `1 1 ${squareWidth}px`
        container.appendChild(squares);
    }
    
}
    



// hover
container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.style.backgroundColor = "black";
    }
});

// button to set resolution

button.addEventListener("click", () => {
    setResolution();
    })



