// https://www.codewars.com/kata/57202aefe8d6c514300001fd/solutions/javascript

function saleHotdogs(n) {
    if(n < 5) return n * 100
    if(n  >= 5 && n < 10) return n * 95
    if(n  >= 10) return n * 90
}
console.log(saleHotdogs(5));

/* 
  assert.strictEqual(saleHotdogs(  1),  100);
    assert.strictEqual(saleHotdogs(  4),  400);
    assert.strictEqual(saleHotdogs(  5),  475);
    assert.strictEqual(saleHotdogs(  9),  855);
    assert.strictEqual(saleHotdogs( 10),  900);
    assert.strictEqual(saleHotdogs(100), 9000);
  */
