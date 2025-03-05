class Player {
    constructor(name) {
        this.name = name;
    }
  }

function duckDuckGoose(players, goose) {
  if(goose <= players.length){
    return players[goose - 1].name
  }
let result = []
console.log(2 % 4);
for(let i = 0; i < goose; i++){
    const index = i % players.length
    result.push(players[index])
    }

    return result[result.length - 1].name
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

// console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 1));
 console.log(duckDuckGoose(players, 11));
//  console.log(duckDuckGoose(['a', 'b', 'c', 'd'], 4));
/*
duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
*/

// Simple
function duckDuckGoose2(players, goose) {
  
    return players[(goose-1)%players.length].name
  }