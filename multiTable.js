function multiTable(number) {
  let result = ''
  for(let i=1; i<=10; i++){
    if(i === 10){
        result += `${i} * ${number} = ${i*number}`
    } else{
        result += `${i} * ${number} = ${i*number}\n`
    }
  }

  return result
}

console.log(multiTable(5));
//console.log(multiTable(1));

// CARA SIMPEL

const multiTable2 = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
  }