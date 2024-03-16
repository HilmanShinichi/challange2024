// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/solutions/javascript

function monkeyCount(n) {
  return [...Array(n)].map((_,i) => i + 1)
}
 
console.log(monkeyCount(5)); // [1, 2, 3, 4, 5]
 console.log(monkeyCount(3)); // [ 1, 2, 3 ]
console.log(monkeyCount(9));
console.log(monkeyCount(10));
console.log(monkeyCount(20));