// https://www.codewars.com/kata/57a083a57cb1f31db7000028/solutions/javascript
function powersOfTwo(n) {
  const result = []

  for(let i = 0; i < n+1;  i++){
    result.push(2 ** i)
  }

  return result
}


console.log(powersOfTwo(0)); // [1]
console.log(powersOfTwo(1)); // [1, 2]
console.log(powersOfTwo(4)); // [1, 2, 4, 8, 16]