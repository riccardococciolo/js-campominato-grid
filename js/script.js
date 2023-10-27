function generateNumbers(maxNumber) {
    let result = []
    for (let i = 1; i <= maxNumber; i++) {
        result.push(i);
    }
    return result
}

console.log(generateNumbers(10));

const easy = generateNumbers(100);

document.querySelector("button").addEventListener("click", )

function gridGenerator() {
    for (let i = 1; i <= easy.lenght; i++) {
        const curNumber = easy[i];
        const cell = 
    }
}

function cellGenerator(innerNumber) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = innerNumber;
    return newCell
}