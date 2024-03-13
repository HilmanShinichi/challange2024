function simpleMultiplication(number) {
   return number % 2 === 0 ? number * 8 : number * 9
}

// soal jika number genap kali 8 jika ganjil kali 9
console.log(simpleMultiplication(2)); // 16
console.log(simpleMultiplication(1)); // 9