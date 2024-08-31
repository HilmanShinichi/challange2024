function correct(string) {
  return string.replaceAll('0', 'O').replaceAll('5', 'S').replaceAll('1', 'I')
}

/* 
S disalahartikan sebagai 5
O disalahartikan sebagai 0
I disalahartikan sebagai 1
*/

console.log(correct("L0ND0N")); // "LONDON"
console.log(correct("DUBL1N")); // "DUBLIN"
console.log(correct("51NGAP0RE")); // "SINGAPORE"