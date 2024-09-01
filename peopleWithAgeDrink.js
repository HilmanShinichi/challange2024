const peopleWithAgeDrink = (old) => {
    if(old > 20) return 'drink whisky'
    if(old < 18 && old >= 14) return 'drink coke'
    if(old > 17) return 'drink beer'
    if(old < 14) return 'drink tody'
  };

  // Cara simpel
  var peopleWithAgeDrink2= function(old) {
    if (old>=21) return 'drink whisky';
    if (old>=18) return 'drink beer';
    if (old>=14) return 'drink coke';
    return 'drink toddy';
  };

  console.log(peopleWithAgeDrink(5))
  console.log(peopleWithAgeDrink(13))
  console.log(peopleWithAgeDrink(14))
  console.log(peopleWithAgeDrink(17))
  console.log(peopleWithAgeDrink(18))
  console.log(peopleWithAgeDrink(21))
  console.log(peopleWithAgeDrink(30))