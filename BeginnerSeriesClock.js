// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions/javascript
function past(h, m, s) {
  const jam = h * 3600000
  const menit = m * 60000
  const detik = s * 1000

  return jam + menit + detik
}

//Soal 
// hmn diubah ke jam dan diubah ke milidetik

// cara simple
const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);

console.log(past(0,1,1)); // 61000
console.log(past(1,1,1)); // 3661000
console.log(past(0,0,0)); // 0
console.log(past(1,0,1)); // 3601000
console.log(past(1,0,0)); // 3600000