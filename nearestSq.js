// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/solutions/javascript

function nearestSq(n) {
  // Langkah 1: Memeriksa apakah n adalah kuadrat sempurna
  const akar = Math.floor(Math.sqrt(n));
  if (akar * akar === n) {
    return n;
  }

  // Langkah 2: Mencari kuadrat terdekat
  const kuadratKecil = akar * akar;
  const kuadratBesar = (akar + 1) * (akar + 1);

  // Langkah 3: Menghitung jarak dan menentukan kuadrat terdekat
  if (n - kuadratKecil < kuadratBesar - n) {
    return kuadratKecil;
  } else {
    return kuadratBesar;
  }
}

// Cara simpel
function nearestSq2(n) {
  let a = Math.round(Math.sqrt(n));
  return a * a;
}

// Contoh penggunaan
console.log(nearestSq(111)); // Output: 121
console.log(nearestSq(144)); // Output: 144
console.log(nearestSq(81)); // Output: 81
console.log(nearestSq(50)); // Output: 49
console.log(nearestSq(6)); // Output: 4

/*
Tugas Anda adalah mencari bilangan kuadrat terdekat, kuadrat_terdekat(n) atau kuadrat terdekat(n), dari bilangan bulat positif n.

Misalnya, jika n = 111, maka terdekat\_sq(n) (terdekatSq(n)) sama dengan 121, karena 111 lebih dekat ke 121, kuadrat dari 11, daripada 100, kuadrat dari 10.

Jika n sudah merupakan kuadrat sempurna (misalnya n = 144, n = 81, dll.), Anda hanya perlu mengembalikan n.

Semoga beruntung :)

Periksa kata saya yang lain:
*/
