function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  let result = "Shark Bait!";
  if (sharkDistance === 0) return result;
  const shark = dolphin
    ? sharkDistance / (sharkSpeed / 2) === 0
    : sharkDistance / sharkSpeed === 0;
  const human = pontoonDistance / youSpeed === 0;
const dolphins = dolphin ? sharkDistance / (sharkSpeed / 2) > pontoonDistance / youSpeed : sharkDistance / sharkSpeed  > pontoonDistance / youSpeed
  if (human) {
    result = "Alive!";
  }
  if (
    !human &&
    !shark &&
    dolphins
  ) {
    result = "Alive!";
  }
  return result;
}

 console.log(shark(12, 50, 4, 8, true));
//  console.log(shark(7, 55, 4, 16, true));
//  console.log(shark(24, 0, 4, 8, true));
// console.log(shark(40, 35, 3, 20, true));
/*
assert.equal(shark(12, 50, 4, 8, true), "Alive!");
    assert.equal(shark(7, 55, 4, 16, true), "Alive!");
    assert.equal(shark(24, 0, 4, 8, true), "Shark Bait!");
*/

// cara simpel
const shark2 = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    let youTime = pontoonDistance / youSpeed
    let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
    
    return sharkTime < youTime ? 'Shark Bait!' : 'Alive!'
  }