class Ball {
    constructor(ballType) {
        this.ballType = ballType || 'regular';
    }
}

const Ball1 = new Ball('supper').ballType
const Ball2 = new Ball().ballType

console.log(Ball1)
console.log(Ball2)