const solution = (a, b) => {
    if (!b) return a.replace(/0/g, '');
    const c = [Number.isNaN(Number(a)) ? a : Number(a), Number.isNaN(Number(b)) ? b : Number(b)].sort((a,b) => typeof a && typeof b === 'string' ? a.length - b.length : a - b )
    const d = [...c]
    d.push(c[0])
return d.join('')
}


// Cara simpel

function solution2(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  }


console.log(solution("45", "1")) // '1451'
console.log(solution("13", "200")); // '1320013'
console.log(solution("Soon", "Me")); // '1320013'
console.log(solution("U", "False")); // '1320013'
console.log(solution("0bgzlfirkmtquhsjax0")); // bgzlfirkmtquhsjax

console.log(solution2("45", "1")) // '1451'
console.log(solution2("13", "200")); // '1320013'
console.log(solution2("Soon", "Me")); // '1320013'
console.log(solution2("U", "False")); // '1320013'

