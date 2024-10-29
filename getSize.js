function getSize(width, height, depth){
    const volume = width * height * depth
    const area = 2 * (width * depth + depth * height + width * height)
    return [area, volume]
}

console.log(getSize(4, 2, 6)) // [88, 48]
console.log(getSize(10, 10, 10)) // [ 600, 1000 ]