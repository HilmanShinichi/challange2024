function closeCompare(a, b, margin = 0) {
  const abs = Math.abs(a - b);
  if(abs <= margin){
    return 0;
  }
  if(a > b) return 1
  if(a < b) return -1
}

console.log(closeCompare(4, 5));
console.log(closeCompare(5, 5));
console.log(closeCompare(6, 5));
console.log(closeCompare(-6, -5));

console.log(closeCompare(2, 5, 3));
console.log(closeCompare(8.1, 5, 3));
console.log(closeCompare(1.99, 5, 3));
