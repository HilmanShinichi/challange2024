function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  } else if (d >= 3) {
    return d * 40 - 20;
  }

  return d * 40;
}

// cara cepat
// function rentalCarCost(d) {
//     return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
//   }

// Should work for under 3 days
console.log(rentalCarCost(1)); // 40
console.log(rentalCarCost(2)); // 80

// Should work for under 7 days
console.log(rentalCarCost(3)); // 100
console.log(rentalCarCost(4)); // 140
console.log(rentalCarCost(5)); // 180
console.log(rentalCarCost(6)); // 220

//  7 days more
console.log(rentalCarCost(7)); // 230
console.log(rentalCarCost(8)); // 270
console.log(rentalCarCost(9)); // 310
console.log(rentalCarCost(10)); // 350
