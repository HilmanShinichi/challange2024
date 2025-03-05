function Sleigh() {
}

Sleigh.prototype.authenticate = function(name, password) {
  return (name === "Santa Claus" && password === "Ho Ho Ho!")
};

const santa = new Sleigh()
console.log(santa.authenticate('santa','hoho'));

/*
name: "Santa Claus"
password: "Ho Ho Ho!"
*/