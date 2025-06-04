function guessBlue(blueStart, redStart, bluePulled, redPulled) {
 const sisaBiru = blueStart - bluePulled
 const sisaMerah = redStart - redPulled
 const totalSisa = sisaBiru + sisaMerah
 return sisaBiru / totalSisa
}

console.log(guessBlue(5, 5, 2, 3));