// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
  if (arr.length <= 0) {
    return 0
  }

  let result = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i]
    }
  }

 
 return result
}

// cara simple
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

console.log(positiveSum([1, 2, 3, 4, 5])) // 15
console.log(positiveSum([1, -2, 3, 4, 5])) // 13
console.log(positiveSum([0])) // 0
