//https://www.codewars.com/kata/55a2d7ebe362935a210000b2/solutions/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort((a,b) => a - b)[0]
    }
  }

  let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,8]));
console.log(sif.findSmallestInt([78,56,232,12,18]));
console.log(sif.findSmallestInt([78,56,232,412,228]));
console.log(sif.findSmallestInt([78,56,232,12,0]));