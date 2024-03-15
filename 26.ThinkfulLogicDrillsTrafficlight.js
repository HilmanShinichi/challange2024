// https://www.codewars.com/kata/58649884a1659ed6cb000072/solutions/javascript
//const updateLight = (current) => current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

// Cara object
const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
