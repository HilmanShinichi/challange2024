//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/javascript
function abbrevName(name){
const  firstName = name.split(' ')[1][0]
 const lastName = name.split(' ')[0][0]

 return `${lastName.toUpperCase()}.${firstName.toUpperCase()}`
}

// cara simple
function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

console.log(abbrevName("Sam Harris")); // S.H
console.log(abbrevName("Patrick Feenan")); // P.F
console.log(abbrevName("Evan Cole")); // E.C
console.log(abbrevName("P Favuzzi")); // S.H
console.log(abbrevName("nvqX AkxXf")); // N.A