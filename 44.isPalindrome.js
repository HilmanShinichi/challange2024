function isPalindrome(x) { 
  return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
}


console.log(isPalindrome("aba")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("")); // false
console.log(isPalindrome("Abba")); // false