function distanceBetweenPoints(a, b) {
    const x = Math.pow(b.x - a.x, 2)
    const y = Math.pow(a.y - b.y, 2)

    const result = Math.sqrt(x + y)
    return result
}

console.log(distanceBetweenPoints({x:3, y:3}, {x:3, y:3}));
