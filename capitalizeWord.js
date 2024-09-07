const capitalizeWord = (word) => {
    const y = [...word]
    y.shift()
    let x = word[0].toUpperCase();
    y.unshift(x)
    return y.join('')
  }

  function capitalizeWord2(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

console.log(capitalizeWord('word'))  
console.log(capitalizeWord('i'))  
console.log(capitalizeWord('glasswear'))  
