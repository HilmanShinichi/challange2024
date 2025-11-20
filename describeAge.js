const describeAge = (age) =>
  age <= 12
    ? "You're a(n) kid"
    : age >= 13 && age <= 17
    ? "You're a(n) teenager"
    : age >= 18 && age <= 64
    ? "You're a(n) adult"
    : "You're a(n) elderly";

console.log(describeAge(9));

// CARA SIMPLE