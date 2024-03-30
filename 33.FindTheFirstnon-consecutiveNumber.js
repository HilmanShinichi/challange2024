function firstNonConsecutive(arr) {
  if (arr.length <= 1) return null; // Mengembalikan null untuk array kosong atau dengan satu elemen

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i]; // Mengembalikan elemen pertama yang tidak berurutan
    }
  }

  return null; // Mengembalikan null jika semua elemen berurutan
}

/*
result null jika array berurutan jika tidak temukan yang number yang tidak berurutan
*/

// Cara simple

function findUnordered(arr) {
    if (arr.length <= 1) return null; // Mengembalikan null untuk array kosong atau dengan satu elemen
    
    const unorderedElement = arr.find((num, index) => {
        return index !== 0 && num !== arr[index - 1] + 1;
    });
    
    return unorderedElement !== undefined ? unorderedElement : null; // Mengembalikan null jika semua elemen berurutan
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
console.log(firstNonConsecutive([1, 2, 3, 4])); // null
