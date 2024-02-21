//https://www.codewars.com/kata/5556282156230d0e5e000089/solutions/javascript

function DNAtoRNA(dna) {
    const regex = /T/g
    return dna.replace(regex, 'U')
}

console.log(DNAtoRNA("TTTT")) //'UUUU'
console.log(DNAtoRNA("GCAT")) //'GCAU'
console.log(DNAtoRNA("GACCGCCGCC")) //'GACCGCCGCC'


//Cara simple

const DNAtoRNA2 = (dna) => dna.replace(/T/g, 'U')


console.log(DNAtoRNA2("TTTT")) //'UUUU'
console.log(DNAtoRNA2("GCAT")) //'GCAU'
console.log(DNAtoRNA2("GACCGCCGCC")) //'GACCGCCGCC'
