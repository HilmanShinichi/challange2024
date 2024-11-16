function sameCase(a, b) {
  const str = `${a}${b}`;
  const checkSimbols = str.split("").every((char) => /[a-zA-Z]/.test(char));
  if (!checkSimbols) return -1;
  const isLowerCase = a === a.toLowerCase() && b === b.toLowerCase();
  const isUpperCase = a === a.toUpperCase() && b === b.toUpperCase();
  if (isLowerCase || isUpperCase || a === b) return 1;
  return 0;
}

/* 
  doTest('C', 'B', 1);
  doTest('b', 'a', 1);
  doTest('d', 'd', 1);
  doTest('A', 's', 0);
  doTest('c', 'B', 0);
  doTest('b', 'Z', 0);
  doTest('\t', 'Z', -1);
  doTest('H', ':', -1);
*/

console.log(sameCase("H", ":"));
console.log(sameCase("C", "B"));
console.log(sameCase("d", "d"));
console.log(sameCase("b", "a"));
console.log(sameCase("A", "s"));
