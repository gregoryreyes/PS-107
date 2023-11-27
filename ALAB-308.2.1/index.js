// The area in which the plants are contained is circular, with a radius of 5 meters.
const radius = 5;

// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const gardenSize = Math.round( PI * radius * radius );
console.log( 'total area of garden ---> ', gardenSize );

// Each plant requires a minimum space of 0.8 square meters.
minSpacePerPlant = 0.8;

// The garden is starting with 20 plants.
let totalPlants = 20;
console.log( `Total plants on day one: ${totalPlants}` )

function calculatePercentage ( x, y ) {
  return Math.round( ( x / y ) * 100 );
}

let weeks = parseInt( prompt('How many weeks?') );
console.log( 'total amount of weeks: ', weeks );

textWeek = weeks > 1 ? 'weeks' : 'week';

for (let i = 0; i < weeks; i++) {
  totalPlants = totalPlants * 2;
}

// '========= Start 1 ========='
console.log( '==================' );
{
  // 1. Predict the plant growth after a specific number of weeks.
  // 2.  If the plants take up more than 80% of the maximum capacity of the garden, the plants should be pruned.
  if ( weeks ) {
    console.log( `* After ${weeks} ${textWeek}, there are ${totalPlants} trees in the garden` );

    let currentSpaceTakenByTrees = totalPlants * minSpacePerPlant;

    console.log( `* The space that ${totalPlants} plants take up is ${currentSpaceTakenByTrees} meters` );

    currentPercentageTakenByTrees = calculatePercentage( currentSpaceTakenByTrees,gardenSize );

    console.log( `* ${currentSpaceTakenByTrees} meters is ${currentPercentageTakenByTrees} percent of the garden space`);

    // Start 3 - try...catch example
    try {
      if ( currentPercentageTakenByTrees > 100 ) {
        throw "* Sorry, The garden has reached is maximum capacity.";
        
      }
    } catch (error) {
      console.log( 'error ----> ', error );
    } finally {
      if ( currentPercentageTakenByTrees < 50 ) {
        console.log( '* There is enough room to plant more trees this week!');
      } else if ( currentPercentageTakenByTrees > 50 && currentPercentageTakenByTrees < 80 ) {
        console.log( `* Warning: The trees are growing and should be pruned soon.` );
      } else if ( currentPercentageTakenByTrees > 80 && currentPercentageTakenByTrees < 100 ) {
        console.log( '* Prune the trees!!!!!' );
      }
    }
    // end 3 - try...catch example

    
  } else {
    console.log( 'Amount of weeks wasn\'t provided' );
  }
}
// ========= End 1 =========

console.log( '==================' );
// ========= Start 2 =========
{
 // if the scientists were to start with 100 plants, and did not prune them for 10 weeks.If the space remained circular, what would be the radius of this expanded garden?
 totalPlants = 100;

 console.log( `Total plants on day one: ${totalPlants}` );

 for (let i = 0; i <= 10; i++) {
  totalPlants = totalPlants * 2;
}

console.log( `totalPlants after 10 weeks: ${totalPlants}` );

console.log( `Total space taken by ${totalPlants} trees after 10 weeks is ${totalPlants * minSpacePerPlant} meters` );
}
// ========= End 2 =========

