// https://www.codewars.com/kata/57cc975ed542d3148f00015b/solutions/javascript

function check(a, x) {
  return a.some(e => e === x)
}

// Lebih simpel
//const check = (a,x) => a.includes(x);


console.log(check([66, 101], 66)); // true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); // false
