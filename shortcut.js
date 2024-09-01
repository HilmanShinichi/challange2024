const shortcut = (string) => string.replaceAll(/[aiueo]/g, '')

  console.log(shortcut('hello')) // hll
  console.log(shortcut('how are you today?')) // hw r y tdy?
  console.log(shortcut('complain')) // cmpln
  console.log(shortcut('never')) // nvr