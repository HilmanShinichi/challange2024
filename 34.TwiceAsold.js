function twiceAsOld(dadYearsOld, sonYearsOld) {
  return  dadYearsOld - (sonYearsOld * 2) < 0 ? Math.abs((dadYearsOld - (sonYearsOld * 2))): dadYearsOld - (sonYearsOld * 2)
}

console.log(twiceAsOld(36,7)); // 2
console.log(twiceAsOld(55,30)); // 5
console.log(twiceAsOld(42,21)); // 0