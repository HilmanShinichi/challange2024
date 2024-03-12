// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/javascript
const findAverage = (array) => array.length === 0 ? 0 : array.reduce((a, b) => a+b, 0) / array.length

// soal buat nilai rata2 balikan 0 jika array empty

console.log(findAverage([1,1,1])) // 1
console.log(findAverage([1,2,3])) // 2
console.log(findAverage([1,2,3,4])) // 2.5
console.log(findAverage([])) // 0