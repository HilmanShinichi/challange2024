function howManyDalmatians(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  var respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number < 101 ? dogs[2] : dogs[3];

  return respond;
}
console.log(howManyDalmatians(26))
console.log(howManyDalmatians(8))
console.log(howManyDalmatians(14))
console.log(howManyDalmatians(80))
console.log(howManyDalmatians(100))
console.log(howManyDalmatians(101))