function enough(cap, on, wait) {
  return on + wait >= cap ? on + wait - cap : 0
}

console.log(enough(10, 5, 5)); // 0
console.log(enough(100, 60, 50)) // 10
console.log(enough(20, 5, 5)) // 0
console.log(enough(68, 20, 57)) // 9