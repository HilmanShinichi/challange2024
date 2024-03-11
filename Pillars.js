//https://www.codewars.com/kata/5bb0c58f484fcd170700063d/solutions/javascript

function pillars(numPill, dist, width) {
    return (numPill - 1) * (dist * 100) + (numPill > 1 ? (numPill - 2) * width : 0);
}

console.log(pillars(2, 20, 25)) //2000
console.log(pillars(11, 15, 30)) //15270
console.log(pillars(1,10,10)) //15270

