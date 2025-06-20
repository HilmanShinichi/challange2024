function chooseBestSum(t, k, ls) {
  // Edge case: Jika kita butuh memilih lebih banyak kota (k) 
  // daripada yang ada di daftar (ls.length), itu tidak mungkin.
  if (k > ls.length) {
    return null;
  }

  let allCombinations = [];

  // Ini adalah fungsi rekursif kita untuk mencari semua kombinasi
  // start: index awal untuk mencegah duplikat dan permutasi ([50, 55] sama dengan [55, 50])
  // combo: array sementara untuk membangun satu kombinasi
  function findCombinations(start, combo) {
    // Base case: jika kombinasi sudah memiliki panjang k, kita berhasil!
    // Salin 'combo' dan simpan ke dalam 'allCombinations'
    if (combo.length === k) {
      allCombinations.push([...combo]); // Gunakan spread operator [...] untuk membuat salinan
      return;
    }

    // Loop melalui sisa elemen dalam daftar
    for (let i = start; i < ls.length; i++) {
      // Panggil fungsi ini lagi untuk elemen berikutnya,
      // dengan memasukkan elemen saat ini (ls[i]) ke dalam kombinasi
      findCombinations(i + 1, [...combo, ls[i]]);
    }
  }

  // Mulai proses pencarian kombinasi dari index 0 dengan kombinasi awal yang kosong
  findCombinations(0, []);

  // Sekarang 'allCombinations' berisi semua kemungkinan, e.g., [[50, 55, 56], [50, 55, 57], ...]

  // 1. Hitung jumlah dari setiap kombinasi
  // 2. Filter jumlah yang lebih besar dari t
  // 3. Cari nilai maksimum dari jumlah yang tersisa
  const bestSum = allCombinations
    .map(combo => combo.reduce((sum, current) => sum + current, 0)) // 1. Hitung jumlah
    .filter(sum => sum <= t) // 2. Filter yang valid
    .reduce((max, current) => Math.max(max, current), 0); // 3. Cari maksimum

  // Jika bestSum masih 0 (atau tidak ada kombinasi yang valid), kembalikan null.
  // Jika tidak, kembalikan bestSum.
  return bestSum === 0 ? null : bestSum;
}

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));