// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/solutions/javascript

var humanYearsCatYearsDogYears = function (humanYears) {
  let result = [];

  if (humanYears > 2) {
    result[0] = humanYears;
    result[1] = (15 + 9) + 4 * (humanYears - 2);
    result[2] = (15 + 9) + 5 * (humanYears - 2);
  } else if (humanYears > 1) {
    result[0] = humanYears;
    result[1] = 15 + 9;
    result[2] = 15 + 9;
  } else {
    result[0] = humanYears;
    result[1] = 15;
    result[2] = 15;
  }

  return result
};

// Cara Simpel
const _humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
    ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
  ];

/* 
  Tahun Kucing
15 tahun kucing untuk tahun pertama
+9 tahun kucing untuk tahun kedua
+4 tahun kucing untuk setiap tahun setelahnya
Tahun Anjing
15 tahun anjing untuk tahun pertama
+9 tahun anjing untuk tahun kedua
+5 tahun anjing untuk setiap tahun setelah itu
  */

console.log(_humanYearsCatYearsDogYears(3)); // [1,15,15]
console.log(humanYearsCatYearsDogYears(2)); // [2,24,24]
console.log(humanYearsCatYearsDogYears(10)); // [10,56,64]
