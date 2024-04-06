// https://www.codewars.com/kata/55ecd718f46fba02e5000029/solutions/javascript

function between(a, b) {
  const result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }
  return result;
}

console.log(between(1, 4)); // [1, 2, 3, 4]
console.log(between(-2, 2)); // [-2, -1, 0, 1, 2]
