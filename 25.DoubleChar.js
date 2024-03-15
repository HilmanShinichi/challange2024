// https://www.codewars.com/kata/56b1f01c247c01db92000076/solutions/javascript

function doubleChar(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i]
  }

  return result;
}

function doubleChar(str) {

 return str.split('').map((e) => e + e).join('') 
}

console.log(doubleChar("abcd")); // "aabbccdd"
console.log(doubleChar("Adidas")); // "AAddiiddaass"
