// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/solutions/javascript

String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase();
};

console.log('c'.isUpperCase())

/*
 assert.property("", "isUpperCase", 'Must define the prototype isUpperCase')
    assert.strictEqual('c'.isUpperCase(), false, 'c is not upper case');
    assert.strictEqual('C'.isUpperCase(), true, 'C is upper case');
    assert.strictEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
    assert.strictEqual('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
    assert.strictEqual('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
    assert.strictEqual('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
*/