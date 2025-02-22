function contamination(text, char) {
  let result = "";
  if (!text || !char) return "";

  for (let i = 0; i < text.length; i++) {
    result = result + char;
  }
  return result;
}

/*
    assert.strictEqual(contamination("abc","z"), "zzz")
    assert.strictEqual(contamination("","z"), "")
    assert.strictEqual(contamination("abc",""), "")
    assert.strictEqual(contamination("_3ebzgh4","&"), "&&&&&&&&")
    assert.strictEqual(contamination("//case"," "), "      ")
*/

console.log(contamination("abc", "z"));
console.log(contamination("//case"," "));

// cara simpel
function contamination2p(text, char){
    return char.repeat(text.length)
  }