function chromosomeCheck(sperm) {
  return sperm === 'XX' ? "Congratulations! You're going to have a daughter.":"Congratulations! You're going to have a son."
}

console.log(chromosomeCheck('XY'))
console.log(chromosomeCheck('XX'))