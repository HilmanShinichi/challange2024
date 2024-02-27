//https://www.codewars.com/kata/576b93db1129fcf2200001e6/solutions/javascript

function sumArray(array) {
  if (array === null || array.length <= 2) {
    return 0;
  }

  const sorted = array.sort((a, b) => a - b);

  let result = 0;

  for (let i = 1; i < sorted.length - 1; i++) {
    result += sorted[i];
  }

  return result;
}

// cara simple
function sumArray(array) {
  if (array == null || array.length <= 2) {
    return 0;
  }

  return (sorted = array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => a + b));
}

console.log(sumArray([6, 2, 1, 8, 10])); // 16
console.log(sumArray([3, 5])); //0
console.log(sumArray([])); //0
console.log(sumArray(null)); //0
console.log(sumArray([-6, 20, -1, 10, -12])); // 3
console.log(sumArray([-6, -20, -1, -10, -12])); //-28
console.log(sumArray([0, 1, 6, 10, 10])); //17
