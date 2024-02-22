var min = function(list){
    let min_num = list[0]
  
    for(let i = 0;  i < list.length; i++){
        if(min_num > list[i]){
            min_num = list[i]
        }
    }
    return min_num
}

var max = function(list){
    let min_num = list[0]
  
    for(let i = 0;  i < list.length; i++){
        if(min_num < list[i]){
            min_num = list[i]
        }
    }
    return min_num
}

console.log(min([-52, 56, 30, 29, -54, 0, -110])) // -110
console.log(min([-52, 56, 30, -110, 29, -54, 0, ])) // -110
console.log(min([42, 54, 65, 87, 0])) //0
console.log(max([4,6,2,1,9,63,-134,566])) //566
console.log(max([5])) //5

// Simple 1
const min1 = (list) => list.sort((a, b) => a - b)[0] 
const max1 = (list) => list.sort((a, b) => b - a)[0] 

console.log(min1([-52, 56, 30, 29, -54, 0, -110])) // -110
console.log(min1([-52, 56, 30, -110, 29, -54, 0, ])) // -110
console.log(min1([42, 54, 65, 87, 0])) //0
console.log(max1([4,6,2,1,9,63,-134,566])) //566
console.log(max1([5])) //5

//Simple 2 
const min2 = (list) => Math.min(...list)
const max2 = (list) => Math.max(...list)


console.log(min2([-52, 56, 30, 29, -54, 0, -110])) // -110
console.log(min2([-52, 56, 30, -110, 29, -54, 0, ])) // -110
console.log(min2([42, 54, 65, 87, 0])) //0
console.log(max2([4,6,2,1,9,63,-134,566])) //566
console.log(max2([5])) //5


