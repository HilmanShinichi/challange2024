function squareOrSquareRoot(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(array[i]))) {
      result.push(Math.sqrt(array[i]));
    } else {
      result.push(array[i] * array[i]);
    }
  }

  return result;
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
// expected [ 2, 9, 3, 49, 4, 1 ]

// cara simpel
function squareOrSquareRoot2(array) {
  return array.map((x) => {
    const r = Math.sqrt(x);
    return r % 1 == 0 ? r : x * x;
  });
}
