class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    const isCrew = this.crew * 1.5
    const match = this.draft - isCrew
   
    return match > 20;
  }
}

const titanic = new Ship(100, 20);

console.log(titanic.isWorthIt());
