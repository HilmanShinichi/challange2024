function array(string) {
  if (string.split('').length < 2 || string.split(',').slice(1, -1).join(' ') === '') return null
  return string.split(',').slice(1, -1).join(' ')
}

// Cara Simpel
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }

  
console.log(array(''))
console.log(array('A1,B1'))
console.log(array('F4RU'))
console.log(array('A1,B2,C3,D4,E5'))
/*
 test('', null);
  test('1', null);
  test('A1,B2', null);
  test('1,2,3', '2');
  test('1,2,3,4', '2 3');
  test('A1,B2,C3,D4,E5', 'B2 C3 D4');
  test('A,1,23,456,78,9,Z', '1 23 456 78 9');
*/