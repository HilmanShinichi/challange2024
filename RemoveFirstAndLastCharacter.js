function removeChar(str) {
  let a = [...str];
  if (a.length > 1) {
    a.pop()
    a.shift()
  }
  return a.join("");
}

console.log(removeChar("eloquent"));
