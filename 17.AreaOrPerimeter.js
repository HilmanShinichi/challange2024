// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/solutions/javascript

// const areaOrPerimeter = function(...s) {
//    if(s[0] === s[1]){
//     return s[0] *  s[1]
//    } else {
//     const a = s[0] * 2
//     const b = s[1] * 2
//     return a + b
//    }
//   };

// Cara Simple
const areaOrPerimeter = (l, w) => l === w ? l * w : l * 2 + w * 2

  console.log(areaOrPerimeter(3,  3)) // 9
  console.log(areaOrPerimeter(6, 10)) // 32