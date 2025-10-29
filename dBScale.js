function dBScale(intensity) {
  const log = intensity / Math.pow(10, -12);
  const db = Math.log10(log) * 10;
  return db
}

console.log(Math.round(dBScale(Math.pow(10, -11))));
