//https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript

const countSheeps = (sheep) => sheep.filter((el) => el).length;

// hitung hanya yang true saja
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
); // 2
