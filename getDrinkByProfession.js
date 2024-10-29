const Drinks = [
  { name: "Jabroni", value: "Patron Tequila" },
  { name: "School Counselor", value: "Anything with Alcohol" },
  { name: "Programmer", value: "Hipster Craft Beer" },
  { name: "Bike Gang Member", value: "Moonshine" },
  { name: "Politician", value: "Your tax dollars" },
  { name: "Rapper", value: "Cristal" },
];

function getDrinkByProfession(param) {
  DrinksMatch = Drinks.filter((drink) => drink.name.toLowerCase() === param.toLowerCase());
  console.log(DrinksMatch)
  if(DrinksMatch.length > 0) return DrinksMatch[0]?.value;

  return "Beer"
}

console.log(getDrinkByProfession("jabrOni")); // Patron Tequila
console.log(getDrinkByProfession("iji")); // "Beer"
