function uefaEuro2016(teams, scores) {
  if (scores[0] === scores[1])
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  }
}

console.log(uefaEuro2016(["Germany", "Ukraine"], [2, 0]))
