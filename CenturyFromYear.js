//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/solutions/javascript
const century = (year) =>
  year.toString().split("").slice(-2).join("") === "00"
    ? Math.floor(year / 100)
    : Math.floor(year / 100) + 1;

// cara simpel
// const century = (year) => Math.ceil(year / 100);

console.log(century(1705)); // 18
console.log(century(1900)); // 19
console.log(century(1601)); // 17
console.log(century(89)); //
