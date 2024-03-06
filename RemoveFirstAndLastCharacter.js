function removeChar(str) {
    let a = [...str]
   a.shift().pop()
   return a
}


console.log(removeChar('eloquent'));