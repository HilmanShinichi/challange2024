const remove = (string) => {
  const x = string.split("");
  string.split("").reverse()[0] === "!" ? x.pop() : x;
  return x.join("");
};

// Cara simpel

function remove2(s){
    return s = s.replace(/!$/g, '');
    
  }

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));

/*
  doTest("Hi!", "Hi");
		doTest("Hi!!!", "Hi!!");
		doTest("!Hi", "!Hi");
		doTest("!Hi!", "!Hi");
		doTest("Hi! Hi!", "Hi! Hi");
		doTest("Hi", "Hi");
  */
