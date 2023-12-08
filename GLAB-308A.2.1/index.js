const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    },
    roll ( mod = 0 ) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`)
    }
  }

  console.log( "adventurer ---> ", adventurer );
adventurer.roll(3);

 adventurer.inventory.forEach( (el, i ) => {
  console.log( 'el ---> ', adventurer.inventory[i] );
 });

//  =================

 class Character {
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll ( mod = 0 ) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
  }
}

class Adventurer extends Character {
  constructor (name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

const magellan = new Adventurer("Magellan");
magellan.role = "Explorer";
console.log( 'magellan ---> ', magellan );

class Companion extends Adventurer {
  constructor ( name, type ){
    super(name);
    this.name = name;
    this.type = type;
    this.inventory.push();
  }
}

const robin = new Adventurer("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Companion("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Companion("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log( 'robin ---> ', robin );
robin.companion.roll(5);
robin.inventory.companion = new Companion("jerry", "pet");

console.log( 'robin ---> ', robin.inventory.companion );
