// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/solutions/javascript
function maps(x){
    let result = []
    for(let i = 0; i< x.length; i++){
       result.push(x[i] * 2 )
    }
    return result
}

// cara simpel
function maps(x){
    return x.map(n => n * 2);
  }
  
console.log(maps([1, 2, 3]));