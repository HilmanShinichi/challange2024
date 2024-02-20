//https://www.codewars.com/kata/53dc23c68a0c93699800041d/solutions/javascript

function smash (words) {
    return words.join(' ')
 };

 console.log(smash(["hello", "amazing", "world"])) // 'hello amazing world'

 //versi barbar

 function smash (words) {
    let result = ''
    for(let i = 0; i < words.length; i++){
        console.log(i)
        console.log(words.length - 1)
        result += words[i]
        if(i !== words.length -1){
          result += ' '
        }
    }
    return result
 };

 console.log(smash(["this", "is", "a", "really", "long", "sentences"])) // 'this is a really long sentences'
