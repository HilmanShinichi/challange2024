// https://www.codewars.com/kata/53af2b8861023f1d88000832/solutions/javascript
const areYouPlayingBanjo = (name) => name.split('')[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`


// huruf awal R / r plays banjo selain itu does not play banjo

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Paul"));
console.log(areYouPlayingBanjo("Ringo"));
console.log(areYouPlayingBanjo("bravo"));
console.log(areYouPlayingBanjo("rolf"));