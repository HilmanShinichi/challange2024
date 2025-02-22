function toCsvText(array) {
    let result =  ''
    console.log(array.length);

    for(let i = 0; i<array.length; i++){
        const flatArray = array[i].flatMap((num) => num)
        result = result + flatArray + `${i < array.length - 1 ? '\n':''}`
    }
  return result
}

/* 
  assert.strictEqual(toCsvText([
  [ 0, 1, 2, 3, 45 ],
  [ 10,11,12,13,14 ],
  [ 20,21,22,23,24 ],
  [ 30,31,32,33,34 ]
  ] ), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');
 */

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);

// cara simpel

function toCsvText2(array) {
    return array.join('\n');
 }
