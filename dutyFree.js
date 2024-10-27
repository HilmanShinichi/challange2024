function dutyFree(normPrice, discount, hol){
const disc =  normPrice * discount / 100
return Math.floor(hol / disc)
}

console.log(dutyFree(12, 50, 1000)) // 166