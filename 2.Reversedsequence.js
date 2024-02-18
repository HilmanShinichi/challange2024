//https://www.codewars.com/kata/5a00e05cc374cb34d100000d/solutions/javascript

const reverseSeq = (n) => {
    let arr = [];
    for(let i = n; i > 0; i--){
      arr.push(i);
    }
    return arr
}
 
const reverseSeq2 = (n) => [...Array(n)].map((el, i) => n - i) 

  console.log(reverseSeq(5))
  console.log(reverseSeq2(5))