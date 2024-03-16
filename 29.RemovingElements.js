// function removeEveryOther(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(i % 2 === 0){
//         result.push(arr[i])
//     }
//   }
//   return result
// }

// function removeEveryOther(arr) {
//     return arr.map((e, i) => {
//         if(i % 2 === 0){
//             return e
//         }
//     }).filter(Boolean)
// }

// Cara simpel
function removeEveryOther(arr) {
  return arr.filter((e, i) => i % 2 === 0)
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeEveryOther([[1, 2]]));
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }]));
