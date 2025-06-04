String.prototype.digit = function () {
  return !!this.match(/^[0-9]$/)
};


console.log('33'.digit());