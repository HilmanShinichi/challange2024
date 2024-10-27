const day = {
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday",
};

const whatday = (num) => num > 7 || !num ? 'Wrong, please enter a number between 1 and 7' : `${day[num]}`;

console.log(whatday(3))
console.log(whatday(8))
console.log(whatday(20))
