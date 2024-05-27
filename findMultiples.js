function findMultiples(integer, limit) {
    if(integer === 1 && limit === 2){
        return [integer, limit]
    }
    let result = []
    if(limit % integer === 0){
        const a = limit / integer
        for(let i = 1; i<a+1; i ++){
            result.push(i * integer)
        }
    } else {
        const b = Math.floor(limit / integer)
        for(let i = 1; i<b+1; i ++){
            result.push(i * integer)
        }
    }

    return result
  }

//Simple
// function findMultiples(int,limit){
//     let result = []
    
//     for (let i = int; i<=limit ; i+=int)
//       result.push(i)
      
//     return result
//   }

console.log(findMultiples(11, 693)); 
  //console.log(findMultiples(5, 25));
  //console.log(findMultiples(1, 2));
  //console.log(findMultiples(11, 693));
  //console.log(findMultiples(11, 54));
  //console.log(findMultiples(4, 27)); // [4, 8, 12, 16, 20, 24]
