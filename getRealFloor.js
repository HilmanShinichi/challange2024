const getRealFloor = (n) => n > 13 ? n - 2 : n > 0 ? n - 1 : n;


console.log(getRealFloor(1))
console.log(getRealFloor(2))
console.log(getRealFloor(0))
console.log(getRealFloor(5))
console.log(getRealFloor(15))
console.log(getRealFloor(14))
console.log(getRealFloor(12))
console.log(getRealFloor(-3))

/*
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3
*/