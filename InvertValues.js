// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions/javascript
const norm = arr => arr.map(n => n === -0 ? 0 : n);
function invert(array) {
     return array.map(el => -el)
}

console.log(norm(invert([1,2,3,4,5]))); // [-1,-2,-3,-4,-5]
console.log(norm(invert([1,-2,3,-4,5]))); // [-1,2,-3,4,-5]
console.log(norm(invert([]))); // []
console.log(norm(invert([0]))); // [0]