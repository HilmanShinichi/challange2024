//https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript

// function squareSum(numbers){
//     let result = 0;

//     for(let i =0; i< numbers.length; i++){
//         result += (numbers[i] * numbers[i])
//     }

//     return result
// }

//const squareSum = (numbers) => numbers.map((el) => el * el).reduce((a,b) => a+b, 0)


//Cara simple
const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)

console.log(squareSum([1,2]))   // 5
console.log(squareSum([0, 3, 4, 5]))  // 50 
console.log(squareSum([])) // 0      