function integrate(coefficient, exponent) {
const ex = exponent + 1
const coe = coefficient / ex

return `${coe}x^${ex}`
}


console.log(integrate(3, 2));


// simple
const integrate2 = (coefficient, exponent) => {
  return coefficient / (exponent + 1) + 'x^' + (exponent + 1);
}

/* 
 3, 2  -->  "1x^3"
12, 5  -->  "2x^6"
20, 1  -->  "10x^2"
40, 3  -->  "10x^4"
90, 2  -->  "30x^3"
*/
