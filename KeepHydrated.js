const litres = (time) => Math.floor(time * 0.5)

// 1 liter minum 0.5

console.log(litres(2)) // 1
 console.log(litres(1.4)) // 0
console.log(litres(12.3)) // 6
console.log(litres(0.82)) // 0
 console.log(litres(11.8))
 console.log(litres(1787))
 console.log(litres(0))