const cookie = (x) =>  `Who ate the last cookie? It was ${typeof x === 'string' ? 'Zach' : typeof x === 'number' ? 'Monica' : 'the dog' }!`


/* 
 assert.strictEqual(cookie("Ryan"), "Who ate the last cookie? It was Zach!");
    assert.strictEqual(cookie(26), "Who ate the last cookie? It was Monica!");
    assert.strictEqual(cookie(2.3), "Who ate the last cookie? It was Monica!");
    assert.strictEqual(cookie(true), "Who ate the last cookie? It was the dog!");
*/

console.log(cookie(false));
