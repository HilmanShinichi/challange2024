const cannonsReady = (gunners) => {
  return Object.values(gunners).every((e) => e === 'aye') ? 'Fire!' : 'Shiver me timbers!'
};

const a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
console.log(cannonsReady(a));