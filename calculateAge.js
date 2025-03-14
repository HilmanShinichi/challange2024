const calculateAge = (birth, upcoming) => birth < upcoming ? `You are ${upcoming - birth} ${upcoming - birth === 1 ? 'year' : 'years'} old.` : birth > upcoming ? `You will be born in ${birth - upcoming} ${birth - upcoming  === 1 ? 'year' : 'years'}.` :  'You were born this very year!'



console.log(calculateAge(2012, 2016)) // "You are 4 years old."
console.log(calculateAge(1989, 2016)) // "You are 27 years old."
console.log(calculateAge(2000, 2090)) // "You are 90 years old."
console.log(calculateAge(2000, 1990)) // "You will be born in 10 years."
console.log(calculateAge(3400, 3400)) // "You were born this very year!")
console.log(calculateAge(900, 2900)) // "You are 2000 years old."
console.log(calculateAge(2010, 1990)) // "You will be born in 20 years."
console.log(calculateAge(2010, 1500)) // "You will be born in 510 years."
console.log(calculateAge(2011, 2012)) // "You are 1 year old.");
console.log(calculateAge(2000, 1999)) // "You will be born in 1 year."