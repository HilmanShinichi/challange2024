function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    return 0;
  });
}

// Cara Simpel
function sorter2(arr) {
  return arr.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1));
}

console.log(sorter(["Algebra", "History", "Geometry", "English"])); // ['Algebra', 'English', 'Geometry', 'History']
console.log(sorter(["Algebra", "history", "Geometry", "english"])); // ['Algebra', 'english', 'Geometry', 'history']
console.log(sorter(["Alg#bra", "$istory", "Geom^try", "**english"])); //  ['$istory', '**english', 'Alg#bra', 'Geom^try']

/* 
SOAL

MEMBANTU! Jason tidak dapat menemukan buku pelajarannya! 
Ini adalah dua hari sebelum tanggal ujian, dan semua buku pelajaran Jason rusak! 
Bantu dia mengurutkan daftar (ArrayList di java) yang berisi buku teks berdasarkan mata pelajaran, sehingga dia dapat belajar sebelum ujian.

Penyortiran TIDAK boleh peka huruf besar-kecil
*/
