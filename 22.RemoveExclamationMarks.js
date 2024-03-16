// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/solutions/javascript
function removeExclamationMarks(s) {
  return s.replaceAll('!', '')
}

console.log(removeExclamationMarks("Hello World!!"));