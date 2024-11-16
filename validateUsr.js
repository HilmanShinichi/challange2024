function validateUsr(username) {
  const res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}


console.log(validateUsr('1234567891011121314132791379137916381637137526326932973'))
console.log(validateUsr('____'))
console.log(validateUsr('1234567890abcdefg'))