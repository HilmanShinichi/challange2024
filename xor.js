const xor = (a, b) => {
  if (a && b) return false;
  if (a || b) return true;
  if (!(a && b)) return false;
};

// Cara Simple
function xor2(a, b) {
    return a != b;
  }

console.log(xor(false, false));
console.log(xor(true, false));
console.log(xor(false, true));
console.log(xor(true, true));
