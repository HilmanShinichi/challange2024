function solution(number) {
  const result = [];

  for(let i = 0; i<number; i++){
    if(i % 3 === 0 || i % 5 === 0){
        result.push(i)
    }
  }
  
  console.log(result);

  return result.sort((a, b) => a - b).filter((num) => num).reduce((a, b) => a + b, 0)
}

console.log(solution(10));
console.log(solution(20));
// 