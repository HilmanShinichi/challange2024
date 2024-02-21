//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/solutions/javascript

function countSheep (num){
    result = ""

    for(let i=1; i<= num; i++){
         result += `${i} sheep...`
    }

    return result
  }

  console.log(countSheep(1)) // "1 sheep..."
  console.log(countSheep(2)) // "1 sheep...2 sheep..."
  console.log(countSheep(3)) // "1 sheep...2 sheep...3 sheep..."


  //Versi simple

  const  countSheep2 = (num) => [...Array(num)].map((_,i) => `${i + 1} sheep...`).join('')
  

  console.log(countSheep2(1)) // "1 sheep..."
  console.log(countSheep2(2)) // "1 sheep...2 sheep..."
  console.log(countSheep2(3)) // "1 sheep...2 sheep...3 sheep..."
