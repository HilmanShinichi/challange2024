//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/solutions/javascript

const getMsg = (n) => `Player ${n} won!`;

const rps = (p1, p2) => {
  switch (true) {
    case p1 === "rock" && p2 === "scissors":
    case p1 === "scissors" && p2 === "paper":
    case p1 === "paper" && p2 === "rock":
      return getMsg(1);
    case p1 === p2:
      return "Draw!";
    default:
      return getMsg(2);
  }
};

//player 1 won!
console.log(rps("rock", "scissors"));
console.log(rps("scissors", "paper"));
console.log(rps("paper", "rock"));

//player 2 won!
console.log(rps("scissors", "rock"));
console.log(rps("paper", "scissors"));
console.log(rps("rock", "paper"));

//Draw
console.log(rps("rock", "rock"));
console.log(rps("scissors", "scissors"));
console.log(rps("paper", "paper"));

// Cara Simple

const rps1 = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (p1 === p2) {
    return "Draw!";
  } else {
    return getMsg(`${rules[p1] === p2 ? 1 : 2}`);
  }
};

//player 1 won!
console.log(rps1("rock", "scissors"));
console.log(rps1("scissors", "paper"));
console.log(rps1("paper", "rock"));

//player 2 won!
console.log(rps1("scissors", "rock"));
console.log(rps1("paper", "scissors"));
console.log(rps1("rock", "paper"));

//Draw
console.log(rps1("rock", "rock"));
console.log(rps1("scissors", "scissors"));
console.log(rps1("paper", "paper"));
