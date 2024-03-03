//https://www.codewars.com/kata/5aa736a455f906981800360d/solutions/javascript

const feast2 = (beast, dish) => beast[0] === dish[0] && dish[dish.length -1] === beast[beast.length -1] 
// at = chartAt
const feast = (beast, dish) => beast.at(0) === dish.at(0) && dish.at(-1) === beast.at(-1) 



console.log(feast("great blue heron", "garlic naan")) // true
console.log(feast("chickadee", "chocolate cake")) // true
console.log(feast("brown bear", "bear claw")) // false