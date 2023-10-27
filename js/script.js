function generateNumbers(maxNumber) {
    let result = []
    for (let i = 1; i <= maxNumber; i++) {
        result.push(i);
    }
    return result
}

console.log(generateNumbers(10));