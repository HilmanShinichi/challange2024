function calculateTip(amount, rating) {
  const ratings = {
    terrible: 0,
    poor: 5,
    good: 10,
    great: 15,
    excellent: 20,
  };
  const checkTip = ratings[rating.toLowerCase()];
  if (checkTip === undefined) {
    return "Rating not recognised";
  }

  return Math.ceil(amount * (checkTip / 100));
}

console.log(calculateTip(20, "Excellent"));
console.log(calculateTip(26.95, "good"));
console.log(calculateTip(10, "terrible"));
/*
You need to consider the following ratings:



Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
*/
