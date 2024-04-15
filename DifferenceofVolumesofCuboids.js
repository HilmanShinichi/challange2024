// https://www.codewars.com/kata/58cb43f4256836ed95000f97/solutions/javascript

function findDifference(a, b) {
  totA = a.reduce((a, b) => a * b)
  totB = b.reduce((a, b) => a * b)
  return Math.abs(totA - totB)
}

// Cara Simple
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }

console.log(findDifference([3, 2, 5], [1, 4, 4])); // 14
console.log(findDifference([14,10,1], b = [14,1,15])); // 70