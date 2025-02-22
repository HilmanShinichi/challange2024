function sixToast(num) {
  const max = 6
  if(num <= 6){
    return max - num
  }

  return num - max
}

/*
Test.assertEquals(sixToast(6), 0);
Test.assertEquals(sixToast(17), 11);
Test.assertEquals(sixToast(3), 3);
*/

console.log(sixToast(17));
// cara simpel 
const sixToast2 = n => Math.abs(6 - n);