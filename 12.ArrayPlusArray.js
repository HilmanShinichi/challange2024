function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b)
  }

  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])) // 21
  console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])) // -21
  console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])) // 15
  console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])) // 2100

// Cara simple
const arrayPlusArray1 = (arr1, arr2) =>  arr1.concat(arr2).reduce((a, b) => a + b)

console.log(arrayPlusArray1([1, 2, 3], [4, 5, 6])) // 21
console.log(arrayPlusArray1([-1, -2, -3], [-4, -5, -6])) // -21
console.log(arrayPlusArray1([0, 0, 0], [4, 5, 6])) // 15
console.log(arrayPlusArray1([100, 200, 300], [400, 500, 600])) // 2100
