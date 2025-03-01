function odds(values) {
  // arrow it
  return values.filter((e) => e % 2 === 1);
}

console.log(odds([2, 4, 6]));
