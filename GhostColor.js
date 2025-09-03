let Ghost = function() {
    const color = ['white', 'yellow', 'purple', 'red'];
 this.color =  color[Math.floor(Math.random() * 4)]
};

ghost = new Ghost().color;
console.log(ghost);