// https://www.codewars.com/kata/55edaba99da3a9c84000003b/solutions/javascript

function divisibleBy(numbers, divisor) {
    return numbers.filter(e => {
        return e % divisor === 0
    })
}

/* 
Selesaikan fungsi yang mengambil dua argumen dan mengembalikan semua bilangan yang habis dibagi oleh pembagi tertentu. 
Argumen pertama adalah array angka dan argumen kedua adalah pembagi.
*/

// Cara simpel
function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
  }

console.log(divisibleBy([1,2,3,4,5,6], 2));
console.log(divisibleBy([1,2,3,4,5,6], 3));
console.log(divisibleBy([0,1,2,3,4,5,6], 4));
console.log(divisibleBy([0], 4));
console.log(divisibleBy([1,3,5], 2));