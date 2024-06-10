// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/solutions/javascript

function differenceInAges(ages) {
    const youngAge = ages.sort((a, b) => a - b)[0]
    const oldAge = ages.sort((a, b) => b - a)[0]
    const diff = oldAge - youngAge
  return [youngAge, oldAge, diff];
}


// Cara simpel
function differenceInAges2 (ages) {

    let max = Math.max(...ages),
        min = Math.min(...ages)
        diff = max - min
        
    return [min, max, diff]
}


//console.log(differenceInAges([82, 15, 6, 38, 35])) // [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])) // [14, 99, 85]

