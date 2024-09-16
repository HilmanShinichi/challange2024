const tripleTrouble = (one, two, three) => {
    const textA = [...one]
    const textB = [...two]
    const textC = [...three]
    const result = []

    for(let i = 0; i<textA.length; i++){
        result.push(textA[i])
        result.push(textB[i])
        result.push(textC[i])
    }

    return result.join('')
};

//console.log(tripleTrouble("aaa","bbb","ccc")) // "abcabcabc"
// console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc")) // "abcabcabcabcabcabc"
// console.log(tripleTrouble("burn", "reds", "roll")) // "brrueordlnsl"
// console.log(tripleTrouble("Sea","urn","pms")) // "Supermans"
// console.log(tripleTrouble("LLh","euo","xtr")) // "LexLuthor"