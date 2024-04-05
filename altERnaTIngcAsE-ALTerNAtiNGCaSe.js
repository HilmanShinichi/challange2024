// https://www.codewars.com/kata/56efc695740d30f963000557/solutions/javascript

String.prototype.toAlternatingCase = function () {
    let result = "";
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            result += this[i].toLowerCase();
        } else {
            result += this[i].toUpperCase();
        }
    }
    return result;
  }


  // Cara simpel
  String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

  console.log("hello world".toAlternatingCase());