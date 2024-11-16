function howManydays(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
        return 30;
        break;
    default:
        return 28
  }
}

console.log(howManydays(1)); // 31
console.log(howManydays(2)); // 28
console.log(howManydays(3)); // 31
console.log(howManydays(4)); // 30
console.log(howManydays(12)); // 31
