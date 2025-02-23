function getCount(str) {
  let result = 0;
  const stringParse = str.split("");
  for(let i = 0; i<stringParse.length; i++ ){
    if(stringParse[i].includes('a') || stringParse[i].includes('i') || stringParse[i].includes('u') || stringParse[i].includes('e') || stringParse[i].includes('o')){
        result = result + 1
    }
  }
 return result
}


console.log(getCount("abracadabra"));
/* 
 assert.strictEqual(getCount("abracadabra"), 5) ;
*/

// cara simpel
function getCount2(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }