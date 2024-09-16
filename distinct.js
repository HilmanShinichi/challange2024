const distinct = (a) => a.filter((char, index, self) => self.indexOf(char) === index)


console.log(distinct([1, 2, 1, 1, 3, 2]));
console.log(distinct([1, 1, 2]));



/* 
CHECK DUPLICATE ELEMENT
*/

const x = [1, 2, 1, 1, 3, 2]
console.log(x.indexOf(2) === 1)