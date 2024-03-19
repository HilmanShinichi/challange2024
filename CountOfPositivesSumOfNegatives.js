// https://www.codewars.com/kata/search/javascript?q=&r%5B%5D=-8&xids=played&beta=false&order_by=popularity%20desc

function countPositivesSumNegatives(input) {
    if(input === null || input[0] === 0 &&  input[1] === 0 || input.length < 1 ){
        return []
    }

    let result = []
    let resultPositiv = 0
    let resultNegative = 0
   
  input.map(el => {
    if(el > 0){
        resultPositiv += 1
    }
    if(el < 0){
        resultNegative += el
    }
  })
  result.push(resultPositiv)
  result.push(resultNegative)
  return result
}

// Cara simpel
// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])); // [8, -50]
console.log(countPositivesSumNegatives(null)); // [8, -50]
console.log(countPositivesSumNegatives([0, 0])); // [8, -50]
console.log(countPositivesSumNegatives([])); // [8, -50]