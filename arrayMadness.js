// returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a, b) {
    let x = 0
    let y = 0
    for( array1 of a ){
        x += array1 ** 2
    }

    for(array2 of b){
        y += array2 ** 3
    }
    
    return x > y
}

console.log(arrayMadness([4,5,6],[1,2,3]))
console.log(arrayMadness([5,6,7],[4,5,6]))

// Cara Simpel
const arrayMadness2 = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 
