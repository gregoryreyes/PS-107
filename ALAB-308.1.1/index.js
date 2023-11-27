const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Start Example
// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
console.log( 'isValid ====> ', isValid );

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
// End Example


// Start Problem 1
const areNumsDivisableByFive = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;

console.log( 'Are all of the numbers divisable by five? ====> ', areNumsDivisableByFive );

const isN1GreaterThanN4 = n1 > n4;
console.log( `Is the first number (${n1}) greater than the fourth number (${n4})? ====> `, isN1GreaterThanN4 );

const n1MinusN2 = n1 - n2;
console.log( `${n1} minus ${n2} equals ${n1MinusN2}` );

const n1MinusN2ByN3 = n1MinusN2 * n3;
console.log( `${n1MinusN2} multiplied by ${n3} = ${n1MinusN2ByN3}` );

const n1MinusN2ByN3DividedByn4 = n1MinusN2ByN3 / n4;
console.log( `${n1MinusN2ByN3} divided by ${n4} = ${n1MinusN2ByN3DividedByn4}` );

console.log( `I changed the comparison operator for variable isOver25 to < to keep the isValid variable true without using the ! operator. isValid equals =====> `, isValid );
// End Problem 1

// Start Problem 2
const totalMiles = 1500;
const fuelEfficiencyAtFiftyfive = 30;
const fuelEfficiencyAtSixty = 28;
const fuelEfficiencyAtSeventyfive = 23;
const budget = 175;
const fuelGallonPrice = 3;

// console.log( 'totalMiles / fuelEfficiencyAtFiftyfive ===> ', totalMiles / fuelEfficiencyAtFiftyfive );

console.log( `it will take ${totalMiles / fuelEfficiencyAtFiftyfive} gallons of fuel to complete the trip when traveling at 55 miles per hour.`);

console.log( `it will take ${(totalMiles / fuelEfficiencyAtSixty).toFixed(2)} gallons of fuel to complete the trip when traveling at 60 miles per hour.`);

console.log( `it will take ${(totalMiles / fuelEfficiencyAtSeventyfive).toFixed(2)} gallons of fuel to complete the trip when traveling at 75 miles per hour.`);

console.log( `It will take ${(totalMiles / 55).toFixed(2)} hours to complete the trip when traveling at 55 miles per hour.` );

console.log( `It will take ${totalMiles / 60} hours to complete the trip when traveling at 60 miles per hour.` );

console.log( `It will take ${(totalMiles / 75).toFixed(2)} hours to complete the trip when traveling at 75 miles per hour.` );
// End Problem 2