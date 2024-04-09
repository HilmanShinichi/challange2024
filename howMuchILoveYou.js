// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/solutions/javascript

const flower = {
  1: "I love you",
  2: "a little",
  3: "a lot",
  4: "passionately",
  5: "madly",
  0: "not at all",
};
function howMuchILoveYou(nbPetals) {
  return flower[nbPetals % 6]
}

console.log(howMuchILoveYou(6));
