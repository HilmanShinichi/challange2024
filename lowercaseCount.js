function lowercaseCount(str){
    return str.split("").filter(char => /^[a-z]$/.test(char)).join("").length;
}

console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"))