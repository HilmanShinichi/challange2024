function well(x) {
    if(!x.includes('good')){
        return 'Fail!'
    }
    if (x.filter(e => e === 'good').length > 2){
        return 'I smell a series!'
    } else {
        return 'Publish!'
    }
}


//console.log(well(['bad', 'bad', 'bad'])) // 'Fail!'
//console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])) // 'Publish!'
//console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])) // 'I smell a series!'


/*
Untuk setiap ide kata yang bagus sepertinya ada beberapa ide yang buruk!

Dalam kata ini Anda perlu memeriksa array yang disediakan (x) untuk ide bagus 'baik' dan ide buruk 'buruk'. Jika ada satu atau dua ide bagus, kembalikan 'Terbitkan!', 
jika ada lebih dari 2 kembalikan 'Saya mencium serial!'. Jika tidak ada ide bagus, seperti yang sering terjadi, kembalikan 'Gagal!'.
*/ 