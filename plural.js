const plural = (n) => {
    if(n>= 0  && n < 1  ) return true
    if(n == 1) return false
    if(n == Infinity) return true
    if(n > 1) return true
  }

  // cara simpel
  function plural2(n) {
    return n !== 1;
  }

  console.log(plural(0))
  console.log(plural(0.5))
  console.log(plural(1))
  console.log(plural(100))
  console.log(plural(Infinity))