function validateHello(greetings) {
  const sayHello = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  const pattern = new RegExp(sayHello.join("|"));
  const isMatch = pattern.test(greetings.toLowerCase());
  return isMatch
}

console.log(validateHello("yOu hoW! TReS? SaluT, TSchuSs! VIstA: DOinG"));
