function generateNumbers(maxNumber) {
    let result = []
    for (let i = 1; i <= maxNumber; i++) {
        result.push(i);
    }
    return result
}

console.log(generateNumbers(10));

const easy = generateNumbers(100);

document.querySelector(".button").addEventListener("click", function() {
    gridGenerator(easy);
})

const gridElem = document.querySelector(".grid");

function gridGenerator(maxGrid) {
    for (let i = 0; i < maxGrid.length; i++) {
        const curNumber = maxGrid[i];
        const cell = cellGenerator(curNumber);
        cell.addEventListener("click", handleCellClick)

        gridElem.append(cell);
    }
}

console.log(gridGenerator);


function cellGenerator(innerNumber) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = innerNumber;
    return newCell
}

console.log(cellGenerator(easy));

function handleCellClick() {
        this.classList.add("lightblue");
}