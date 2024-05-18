function stringy(size) {
  let result = []
  for(let i = 1; i<= size; i++){
    let w = 0
    if(i % 2 === 0){
        w = 0
        result.push(w)
    } else {
        w = 1
        result.push(w)
    }
    
  }

  return result.join('')
}

// cara simpel

function stringy(size) {
    return new Array(size).join('10').substr(0,size)   
  }

console.log(stringy(6));

/* 
SOAL

tuliskan saya fungsi stringy yang mengambil ukuran dan mengembalikan string 1 dan 0 bergantian.

string harus dimulai dengan 1.

string dengan ukuran 6 akan menghasilkan :'101010'.

dengan ukuran 4 akan menghasilkan: '1010'.

dengan ukuran 12 akan menghasilkan : '101010101010'.

Ukurannya akan selalu positif dan hanya menggunakan bilangan bulat.
*/