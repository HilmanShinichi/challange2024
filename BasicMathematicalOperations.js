//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/solutions/javascript
function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  }
}

// cara simple
function basicOp(o, a, b) {
    return eval(a+o+b);
  }

console.log(basicOp("+", 4, 7)); // 11
