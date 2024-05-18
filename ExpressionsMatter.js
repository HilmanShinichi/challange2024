function expressionMatter(a, b, c) {
    const az = a * (b + c)
    const bz = a * b * c
    const cz = a + b * c
    const dz = (a + b) * c
    const ez = a + b + c

    const result = [az, bz, cz, dz, ez ].sort((b, a) => a - b)[0]
  return result
}

// cara simpel
function expressionMatter2(a, b, c) {
    return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
  }

//console.log(expressionMatter(1, 2 , 3))
console.log(expressionMatter(1, 8, 3))


/*
SOAL 
Cari nilai terbesar dari 5 cara penjumlahan

*/