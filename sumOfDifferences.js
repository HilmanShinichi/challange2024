function sumOfDifferences(arr) {
  const desc = arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < desc.length - 1; i++) {
    sum += desc[i] - desc[i + 1];
  }

  return sum;
}

console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([10,-1,2,4,-5,-10,-11,-11,6,10,-10,12,2,0,9,6,-5,-9,-5,5,-3,-13,-1,9,-6,1,9,-13])); // 25
