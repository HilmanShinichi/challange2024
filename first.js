function first(arr, n) {
  return n === undefined ? arr.slice(0, 1) : arr.slice(0, n)
}

console.log(first(['a', 'b', 'c', 'd', 'e'], 3));
console.log(first(['a', 'b', 'c', 'd', 'e'], 0));
console.log(first(['a','b']));

/*
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/