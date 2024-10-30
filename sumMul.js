function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";
  let result = [];
  result.push(n);
  for (let i = n; i < m; i++) {
    if (i + n < m) result.push(i + n);
  }
 
  const kelipatanN = result.filter((num) => num % n === 0)
 
  return kelipatanN.reduce((acc, current) => acc + current);
}

/* 
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

console.log(sumMul(2, 9)); // 20
console.log(sumMul(3, 13)); // 30
console.log(sumMul(0, 0)); // 20


// CARA SIMPEL

function sumMul(n,m){
    if (n >= m) return "INVALID";
  
  var sum = 0;
    for (var i = n; i < m; i+=n) {
      sum += i;
    }
    return sum;
  }