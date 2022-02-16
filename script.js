const gridContainer = document.getElementById("gridContainer");
const resetButton = document.getElementById("resetButton");
//let gridSize = prompt("please enter an even number for grid size ");

let gridSize = 16;

function drawGrid(size) {
    for(let i = 0; i < gridSize; i++) {
        for(let j = 0; j < gridSize; j++) {
            // const randomColor = Math.floor(Math.random()* 16777215).toString(16);
            const gridElement = document.createElement("div");
            let gridElementWidth = 600 / gridSize;
    
            gridElement.className = "grid-element";
            gridElement.style.width = gridElementWidth + "px";
            gridElement.style.height = gridElementWidth + "px";
            gridElement.addEventListener("mouseover", () => gridElement.classList.add("colored"));
            // gridElement.style.backgroundColor = "#" + randomColor;
            gridContainer.appendChild(gridElement);
        }
    }
}


drawGrid(gridSize);


resetButton.addEventListener("click", () => {
    const gridElements = document.querySelectorAll(".grid-container > *");
    for (const element of gridElements) {
        console.log(element)
        //element.classList.remove("colored");
        gridContainer.removeChild(element);
    }
    gridSize = prompt("please enter an even number for grid size ");
    drawGrid(gridSize);
})


