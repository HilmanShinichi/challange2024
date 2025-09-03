class God{
/**
 * @returns Human[]
 */
  static create() {
    return [new Man(), new Woman()];
  }
}
class Human extends God {
}
class Man extends Human {
}
class Woman extends Human {
}

let humans = God.create();
console.log(humans[0] instanceof Man);   // true
console.log(humans[1] instanceof Woman); // true

