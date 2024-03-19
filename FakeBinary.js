// https://www.codewars.com/kata/57eae65a4321032ce000002d/solutions/javascript

function fakeBin(x) {
    return x.replace(/\d/g, function(e) {
        return e < 5 ? '0' : '1';
    });
}

// Cara simpel

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

console.log(fakeBin('45385593107843568')); // '01011110001100111'
console.log(fakeBin('509321967506747')); // '101000111101101'
console.log(fakeBin('366058562030849490134388085')); // '011011110000101010000011011'