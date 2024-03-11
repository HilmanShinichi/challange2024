function lovefunc(flower1, flower2) {
  return flower1 % 2 === 0 && flower2 % 2 === 1 || flower2 % 2 === 0 && flower1 % 2 === 1
}

// cara simpel
function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }

// soal flower harus ganjil genpa atau sebaliknya

console.log(lovefunc(1, 4)) // true
console.log(lovefunc(2, 2)) // false
console.log(lovefunc(0, 1)) // true
console.log(lovefunc(0, 0)) // false
