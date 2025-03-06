function numberToPower(number, power) {
    const result = []
    for(let i = 0; i< power; i++){
       result.push(number)
    }

    return result.reduce((a, b) => a * b, 1)
}

console.log(numberToPower(2, 8));
console.log(2 ** 8);