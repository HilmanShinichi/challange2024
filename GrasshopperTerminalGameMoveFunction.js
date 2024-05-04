// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/solutions/javascript

function move(position, roll) {
  if(position === 0) return roll * 2

  return roll * 2 + position
}

// Cara Simple
//const move = (position, roll) => position + roll * 2


console.log(move(0, 4))
console.log(move(3, 6))
console.log(move(2, 5))



/* 
  Test.assertEquals(move(0, 4), 8);
    Test.assertEquals(move(3, 6), 15);
    Test.assertEquals(move(2, 5), 12);
*/
