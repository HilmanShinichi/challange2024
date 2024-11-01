/*
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/

function mango(quantity, price) {
  let result = 0 
  for(let i = 0; i <= quantity; i++){
    if(i % 3){
        result += price
    }
  }
  

  return result;
}

console.log(mango(65, 58)); //2552
// console.log(mango(2, 3));
// console.log(mango(3, 3));
// console.log(mango(5, 3));
// console.log(mango(9, 5));

