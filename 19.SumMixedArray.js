//https://www.codewars.com/kata/57eaeb9578748ff92a000009/solutions/javascript

function sumMix(x){
    let result = 0
    for(let i = 0; i<x.length; i++ ){
        result += parseInt(x[i])
    }
    return result
}

// Cara 2
const sumMix = (x) => x.reduce((a, b) => parseInt(a) + parseInt(b), 0)

console.log(sumMix([9, 3, '7', '3'])) // 22
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])) // 42
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])) // 41
