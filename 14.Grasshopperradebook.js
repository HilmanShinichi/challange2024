
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// function getGrade(s1, s2, s3) {
//    const nilai = (s1 + s2 + s3) / 3
//    if (nilai > 90) {
//     return 'A';
//   } else if (nilai >= 80 && nilai <= 90) {
//     return 'B';
//   } else if (nilai >= 70 && nilai <= 80) {
//     return 'C';
//   } else if (nilai >= 60 && nilai <= 70) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }


// console.log(getGrade(95, 90, 93)); // A
// console.log(getGrade(70, 70, 100)); // B
// console.log(getGrade(70, 70, 70)); // C
// console.log(getGrade(65, 70, 59)); // D
// console.log(getGrade(44, 55, 52)); // F

// Cara medium 
function getGrade(...s){
    const nilai = s.reduce((acc, acu) => acc + acu) / s.length

    if(nilai < 60 ) return 'F';
    if(nilai < 70 ) return 'D';
    if(nilai < 80 ) return 'C';
    if(nilai < 90 ) return 'B';
    return 'A'
}

console.log(getGrade(95, 90, 93)); // A
console.log(getGrade(70, 70, 100)); // B
console.log(getGrade(70, 70, 70)); // C
console.log(getGrade(65, 70, 59)); // D
console.log(getGrade(44, 55, 52)); // F
