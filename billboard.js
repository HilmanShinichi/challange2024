function billboard(name, price = 30){
    let result = 0
    for(let i = 0; i<name.length; i++){
        result = result + price
    }
    return result
} 

console.log(billboard("Jeong-Ho Aristotelis"));

/* 
assert.strictEqual(billboard("Jeong-Ho Aristotelis"), 600);
  assert.strictEqual(billboard("Abishai Charalampos"), 570);
  assert.strictEqual(billboard("Idwal Augustin"), 420);
  assert.strictEqual(billboard("Hadufuns John",20), 260);
  assert.strictEqual(billboard("Zoroaster Donnchadh"), 570);
  assert.strictEqual(billboard("Claude Miljenko"), 450);
  assert.strictEqual(billboard("Werner Vígi",15), 165);
  assert.strictEqual(billboard("Anani Fridumar"), 420);
  assert.strictEqual(billboard("Paolo Oli"), 270);
  assert.strictEqual(billboard("Hjalmar Liupold",40), 600);
  assert.strictEqual(billboard("Simon Eadwulf"), 390);
*/

// cara simpel
function billboard2(name, price = 30){
    return name.repeat(price).length;
  } 