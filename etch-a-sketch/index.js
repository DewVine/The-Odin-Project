let gridContainer = document.querySelector('.gridContainer');
let gridButton = document.querySelector(".gridButton");
let sizeInput = document.querySelector(".sizeInput")

function createGrid(size) {
    for (let i=0; i<size; i++) {
        let gridCollumn = document.createElement("div");
        gridCollumn.classList.add("gridCollumn");
        gridContainer.appendChild(gridCollumn);
        for (let i=0; i<size; i++) {
            let gridRow = document.createElement("div");
            gridRow.classList.add("gridRow");
            gridCollumn.appendChild(gridRow);
        }
    }

    // event listerner for coloring effect
    gridContainer.addEventListener("mouseover", (event) => {
        if (event.target.matches('.gridRow')) {
            changeColor(event);
        }
    })
}

function changeColor(e) {
    let value1 = Math.random()*256;
    let value2 = Math.random()*256;
    let value3 = Math.random()*256;
    e.target.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
}

function clearGrid() {
    gridContainer.replaceChildren();
}

// code for input and button
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

// starter grid
createGrid(16);