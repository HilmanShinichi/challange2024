//https://www.codewars.com/kata/5bb904724c47249b10000131/solutions/javascript

// Cara Simple
function points(games) {
    return games.reduce((total, game) => total + (parseInt(game[0]) > parseInt(game[2]) ? 3 : parseInt(game[0]) === parseInt(game[2]) ? 1 : 0), 0)
  }

  // Cara Barbar
  function points(games) {
    let sum = 0;
    for(let i = 0; i < games.length; i++) {
      
      
      let a = games[i].split(':');
      if(a[0] > a[1]) {
        sum += 3;
      } else if(a[0] == a[1]) {
        sum += 1;
      } else { sum = sum } 
     
    }
    return sum;
   }

  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])) // 30
  console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])) // 10
  console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])) // 0
  console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])) // 15
  console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"])) // 12

  