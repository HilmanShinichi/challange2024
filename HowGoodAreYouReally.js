// https://www.codewars.com/kata/5601409514fc93442500010b/solutions/javascript
function betterThanAverage(classPoints, yourPoints) {
 return  yourPoints > classPoints.reduce((a, b) => a+b, 0) / classPoints.length
}

// Soal
//Ada ujian di kelasmu dan kamu lulus. Selamat!
// Tapi Anda adalah orang yang ambisius. Anda ingin tahu apakah Anda lebih baik dari rata-rata siswa di kelas Anda.
// Anda menerima array dengan nilai ujian rekan Anda. Sekarang hitung rata-ratanya dan bandingkan skor Anda!
// Kembalikan Benar jika Anda lebih baik, jika tidak Salah!
// Catatan:
// Poin Anda tidak termasuk dalam rangkaian poin kelas Anda. Untuk menghitung poin rata-rata, Anda dapat menambahkan poin Anda ke array yang diberikan!

console.log(betterThanAverage([2, 3], 5)) // true
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)) // true
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)) // false