// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/solutions/javascript
function sum(numbers) {
 return numbers.length === 0 ? 0 : numbers.reduce((a, b) => a+b,0) 
}

console.log(sum([])) // 0 
console.log(sum([1, 5.2, 4, 0, -1])) // 9.2