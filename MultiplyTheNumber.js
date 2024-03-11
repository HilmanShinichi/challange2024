// https://www.codewars.com/kata/5708f682c69b48047b000e07/solutions/javascript

const multiply = (number) => number * 5 ** number.toString().replace('-','').length

//Jack sangat menyukai angka limanya: triknya adalah Anda harus mengalikan setiap angka dengan 5 yang dipangkatkan dengan jumlah digit setiap angka
  console.log(multiply(10)); // 250
  console.log(multiply(5)); // 25
 console.log(multiply(200)); // 25000
   console.log(multiply(0)); // 0
 console.log(multiply(-2)); // -10