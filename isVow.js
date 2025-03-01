function isVow(a) {
    return a.map(num => {
        let char = String.fromCharCode(num);
        return "aeiou".includes(char) ? char : num;
      });
}

console.log(isVow([]));