function slope(points) {
  const x1 = points[0],
    y1 = points[1],
    x2 = points[2],
    y2 = points[3];
  const p = y2 - y1;
  const q = x2 - x1;

  if (q === 0) return "undefined";
  return `${p / q}`;
}

console.log(slope([19, 3, 20, 3]));
console.log(slope([2, 7, 4, -7]));
console.log(slope([10, 50, 30, 150]));
console.log(slope([15, 45, 12, 60]));
console.log(slope([10, 20, 20, 80]));
console.log(slope([-10,6,-10,3]));
