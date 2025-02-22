function calculator(a, b, sign) {
  if ((typeof a && typeof b) !== "number") return "unknown value";
  if (sign === "+") {
    return a + b;
  } else if (sign === "-") {
    return a - b;
  } else if (sign === "*") {
    return a * b;
  } else if (sign === "/") {
    return a / b;
  } else {
    return "unknown value";
  }
}

/*
Test.assertEquals(calculator(1,2,"+"), 3, "calculate");
Test.assertEquals(calculator(1,2,"-"), -1, "calculate");
Test.assertEquals(calculator(3,5,"*"), 15, "calculate");
Test.assertEquals(calculator(6,2,"/"), 3, "calculate");
Test.assertEquals(calculator(6,2,"$"), "unknown value", "calculate"); 
Test.assertEquals(calculator(6,"h","*"), "unknown value", "calculate");
*/

console.log(calculator(6, "h", "*"));

// simpel
function calculator2(a, b, sign) {
  try {
    return eval(a + sign + b);
  } catch (e) {
    return "unknown value";
  }
}

console.log([1, 2], [[1], [2]]);
