function remainder(n, m) {
    if(n < m){
        return m % n
    } else {
       return  n % m
    }
}


console.log(remainder(1, 0))
console.log(remainder(17, 5))
console.log(remainder(72, 13))
console.log(remainder(-363, 913))