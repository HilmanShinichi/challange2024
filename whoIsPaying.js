function whoIsPaying(name) {
    let result = []
    let firstName
    if(name.length > 2){
        firstName = name.substr(0, 2)
        result.push(firstName)
    }
    result.push(name)
    
  return result.reverse()
}
console.log(whoIsPaying("Mexico"));
console.log(whoIsPaying("Melania"));
console.log(whoIsPaying("Me"));

/* 
assert.deepEqual(whoIsPaying("Mexico"), ["Mexico", "Me"]);
    assert.deepEqual(whoIsPaying("Melania"), ["Melania", "Me"]);
    assert.deepEqual(whoIsPaying("Melissa"), ["Melissa", "Me"]);
    assert.deepEqual(whoIsPaying("Me"), ["Me"]);
    assert.deepEqual(whoIsPaying(""), [""]);
    assert.deepEqual(whoIsPaying("I"), ["I"]);
*/
