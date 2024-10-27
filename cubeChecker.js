// Cari kubus sempurna, semua sisi sama nilainya ada 3 sisi

function cubeChecker(volume, side) {
  if( volume <= 0 || side <=0 ) return false

  if(side ** 3 === volume){
    return true
  }
  return false
}

console.log(cubeChecker(0, 1))
console.log(cubeChecker( 8, 2))
console.log(cubeChecker( -8,-2))
console.log(cubeChecker(  0, 0))
console.log(cubeChecker( 1, 5))
console.log(cubeChecker( 125, 5))


// Cara Simpel 
var cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0;
  };
