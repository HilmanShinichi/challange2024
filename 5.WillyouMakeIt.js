const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const bensin = mpg * fuelLeft
    if(bensin >= distanceToPump){
        return true
    } else {
        return false
    }
  };

  console.log(zeroFuel(50, 25, 2)) // true
  console.log(zeroFuel(100, 50, 1)) // false


  // versi simple
  const zeroFuel2 = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft
  };

  console.log(zeroFuel2(50, 25, 2)) // true
  console.log(zeroFuel2(100, 50, 1)) // false
