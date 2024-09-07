const addLength = (str) => {
  let result = []
  const x = str.split(' ')
  for (i in x){
   const length = x[i].length
   result.push(`${x[i]} ${length}`)
  }
  return  result
}

// cara Simpel

function addLength2(str){
    return str.split(" ").map(s => `${s} ${s.length}`)
  }

console.log(addLength("apple ban"))
console.log(addLength("you will win"))

console.log(addLength2("apple ban"))
console.log(addLength2("you will win"))

/*
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
*/
