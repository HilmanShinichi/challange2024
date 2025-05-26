function drawStairs(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += " ".repeat(i) + "I";
    if (i < n - 1) {
      result += "\n";
    }
  }
  return result;
}

// console.log(drawStairs(1));
// console.log(drawStairs(3));
console.log(drawStairs(5));
