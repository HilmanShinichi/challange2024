// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript
function digitize(n) {
  return n.toString().split('').map((e) => parseInt(e)).reverse()
}

// Cara Simpel
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

console.log(digitize(35231)); // [1,3,2,5,3]
console.log(digitize(0)); // [0]