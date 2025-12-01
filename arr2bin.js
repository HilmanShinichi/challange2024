function arr2bin(arr) {
  let result = 0;
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      result += arr[i];
    }
  }

  return result.toString(2);
}

console.log(arr2bin([1, 2]));
console.log(true + true + false + 15);
