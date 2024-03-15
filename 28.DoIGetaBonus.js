// https://www.codewars.com/kata/56f6ad906b88de513f000d96/solutions/javascript
function bonusTime(salary, bonus) {
  return `£${bonus ? salary * 10 : salary}`
}

// jika bonus true salary kali 10

console.log(bonusTime(10000, true));      
console.log(bonusTime(10000, false));      