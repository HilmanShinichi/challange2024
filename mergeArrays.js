// https://www.codewars.com/kata/5899642f6e1b25935d000161/solutions/javascript
function mergeArrays(arr1, arr2) {
  const newArr = arr1.concat(arr2).sort((a, b) => a - b);
  const filterArr = newArr.filter((item, index) => newArr.indexOf(item) === index);
  return filterArr;
}

console.log(mergeArrays([1,2,3,4], [5,6,7,8])) // [1,2,3,4,5,6,7,8]
console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2])) // [1,2,3,4,5,6,7,8,9,10]
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); // [1,2,3,4,5,7,9,10,11,12]

/*
HAPUS element ARRAY yang double
*/