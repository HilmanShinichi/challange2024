const remove = (string) => {
  const x = string.split(" ");
  const z = string.split(" ");
  let result = [...z]
  if (x.length > 1) {
    const w = z.reverse()[0].replaceAll("!", "");
    result.pop()
    result.push(w)
    return result.join(' ')
  } else {
    return string[0] === "!"
      ? "!" + string.slice(1).replace(/!/g, "")
      : string.replace(/!/g, "");
  }
};

// Cara simpel

const remove2 = s => s.replace(/!+$/, '');

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("mpsx! q jhft uktngi! cez! chxybrt!!"));
console.log(remove("Hi"));

/*
  doTest("Hi!", "Hi");
		doTest("Hi!!!", "Hi!!");
		doTest("!Hi", "!Hi");
		doTest("!Hi!", "!Hi");
		doTest("Hi! Hi!", "Hi! Hi");
		doTest("Hi", "Hi");
  */
