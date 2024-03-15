// https://www.codewars.com/kata/568dcc3c7f12767a62000038/solutions/javascript

const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));
