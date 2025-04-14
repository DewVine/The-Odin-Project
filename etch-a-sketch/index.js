let gridContainer = document.querySelector('.gridContainer');
let gridButton = document.querySelector(".gridButton");
let sizeInput = document.querySelector(".sizeInput")

function createGrid(size) {
    for (let i=0; i<size; i++) {
        let gridCollumn = document.createElement("div");
        gridContainer.appendChild(gridCollumn);
        for (let i=0; i<size; i++) {
            let gridRow = document.createElement("div");
            gridCollumn.appendChild(gridRow);
        }
    }
}

function clearGrid() {
    gridContainer.replaceChildren();
}

gridButton.addEventListener("click", function() {
    if (Number(sizeInput.value)) {
        clearGrid();
        createGrid(sizeInput.value);
        sizeInput.setAttribute("placeholder", sizeInput.value);
        sizeInput.value = '';

    } else {
        sizeInput.value = '';
        sizeInput.setAttribute("placeholder", "Input must be a number.");
    }}
)

createGrid(16);