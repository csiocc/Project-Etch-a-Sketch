// Project-Etch-a-Sketch.git
const screenSize = 960;
const button = document.querySelector(".button")
const container = document.querySelector(".container")

 // set Resolution

function setResolution() {
    let resInputRaw = document.querySelector(".resinput");
    let resInput = Number(resInputRaw.value);
    let squareWidth = (screenSize / resInput);
    let Resolution = (resInput * resInput)
    container.innerHTML = ""
    for (let index = 0; index < Resolution; index++) {
        const squares = document.createElement("div");
        squares.setAttribute("class", `square`);
        squares.setAttribute("width", `${squareWidth}`)
        squares.setAttribute("height", `${squareWidth}`)
        squares.style.flex = `1 1 ${squareWidth}px`
        // hover
        squares.addEventListener("mouseover", () => {
        console.log("mouseoverdetected");
        squares.style.backgroundColor = "black";
        })
    container.appendChild(squares);
    }
    
}








// button to set resolution

button.addEventListener("click", () => {
    setResolution();
    })










