function twoString(s1, s2){
  return s1.length - s2.length < 2 
}


console.log(twoString('telcom', 'telc'))
console.log(twoString('telcom', 'telco'))