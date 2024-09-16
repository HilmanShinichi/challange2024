function hello(name) {
    if(name === undefined || name === '') return 'Hello, World!'
    let result = ''
    result += name[0].toUpperCase()
    result += name.replace(name[0], '')


    
    const names = result.split('').map((e, i) => {
        return i >= 1 ? e.toLocaleLowerCase() : e 
    })

 return  `Hello, ${names.join('')}!`
}

/*
CHECK ELEMENT INDEX LEBIH DARI 1 
*/

  console.log(hello('alice'))
  console.log(hello('johN'))