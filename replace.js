const replace = (s) => s.replaceAll(/[aiueo]/ig, '!')


console.log(replace("Hi!"))
console.log(replace("aeiou"))
console.log(replace("!Hi! Hi!"))
console.log(replace("ABCDE"))