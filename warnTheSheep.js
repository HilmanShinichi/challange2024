//const warnTheSheep = (queue) => queue[queue.length - 1] === 'wolf' ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${(queue.length - queue.indexOf('wolf') - 1)}! You are about to be eaten by a wolf!`


// cara simpel
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    console.log(position)
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])) // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
//console.log(warnTheSheep(["sheep", "sheep", "wolf"])) // "Pls go away and stop eating my sheep"
