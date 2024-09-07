const uangKembalian = (num) => {
    const mataUang = [100000, 50000,  20000, 10000, 5000, 2000, 1000, 500, 200, 100]
    const kembalian = {}
    for (i in mataUang){
       if(num + 99 >= mataUang[i]){
        const lembar = Math.floor((num + 99)/mataUang[i])
        console.log(lembar)
        num = num - mataUang[i] * lembar
        console.log(num)
        kembalian[`Rp. ${mataUang[i]}`] = lembar
       } 
    }

    return kembalian
}

console.log(uangKembalian(150490))
console.log(Math.floor(150490 / 100000))
console.log(150490 - 100000 * 1)