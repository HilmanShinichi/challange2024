// https://www.codewars.com/kata/577ff15ad648a14b780000e7/solutions/javascript

const greetings = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
    return greetings[language] === undefined ?  greetings.english : greetings[language]
}

console.log(greet("english")); // 'Welcome'
console.log(greet("dutch")); // 'Welkom'
console.log(greet("IP_ADDRESS_INVALID"));
