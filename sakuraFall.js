function sakuraFall(v) {
  const DELTA = 1e-6;
  if (v < 0) return 0;
  if (v < DELTA) return 0;
  return 80 / (v / 5);
}

console.log(sakuraFall(5));
console.log(sakuraFall(10));
console.log(sakuraFall(200));
console.log(sakuraFall(1));
