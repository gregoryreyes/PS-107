{
  let counter = 1

  while ( counter <= 100 ) {
    if ( counter % 3 === 0 || counter % 5 === 0 ) {
      if ( counter % 3 === 0 && counter % 5 === 0  ){
        console.log( "Fizz Buzz" );
      } else if ( counter % 3 === 0 ) {
        console.log( "Fizz" );
      } else if ( counter % 5 === 0 ) {
        console.log( "Buzz" );
      } 
    } else {
      console.log( counter );
    }
    ++counter;
  }
}


console.log( `=======================` );

{
  let n = parseInt( prompt("Please enter a number:") );

function findNextPrimeNumber( num ) {
  let numbers = [];
  let number = null;
  let nIsDivisibleBy = [];
  let isPrime = false;

  for ( let i = 2; i <= 1000; i++ ) {
    if ( num % i === 0 ) {
      numbers.push( i );
      number = i;
      nIsDivisibleBy.push( i );
    }
  }

  if ( numbers && numbers.length === 1 ) {
    isPrime = true;
  }

  return isPrime;

}

  let numbers = [];
  let number = null;
  let nIsDivisibleBy = [];
  
  for ( let i = 2; i <= 100; i++ ) {
    if ( n % i === 0 ) {
      numbers.push( i );
      number = i;
      nIsDivisibleBy.push( i );
    }
  }
  
  if ( numbers && numbers.length === 1 ) {
    console.log( `The number you entered is ${numbers[0]}, which is a prime number` );
  } else {
    if ( n ) {
      if ( n === 1 ) {
        console.log( `${n} is not prime number.` );
      } else {
        console.log( `${n} is not a prime number because it is divisible by the following numbers: 1,${nIsDivisibleBy}`);
      }

      let nextNumber = n + 1;
      while ( findNextPrimeNumber( nextNumber ) !== true && n < 1000 ) {
        ++nextNumber;
        findNextPrimeNumber( nextNumber );
      } 
      console.log( `The next prime number is ${nextNumber}` );
    } else {
      console.log( `A number was not entered. Unable to find next prime number` );
    }
  }
}

console.log( `=======================` );
{
  const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

  let currentCell = 1;
  let cell1 = [];
  let cell2 = [];
  let cell3 = [];
  let cell4 = [];
  let cells = [];

  for ( let i = 0; i < csv.length; i++) {

    if ( csv[i] === "\n" ) {
      ++currentCell
    }

    if ( currentCell === 1 ) {
      if ( csv[i] !== "\n" ) {
        cell1.push( csv[i] );
      }
    } else if ( currentCell === 2 ) {
      if ( csv[i] !== "\n" ) {
        cell2.push( csv[i] );
      } 
    } else if ( currentCell === 3 ) {
      if ( csv[i] !== "\n" ) {
        cell3.push( csv[i] );
      }
    } else if ( currentCell === 4 ) {
      if ( csv[i] !== "\n" ) {
        cell4.push( csv[i] );
      }
    }

  }
  
  cells[0]= cell1.join( "" ).split(',');;
  cells[1]= cell2.join( "" ).split(',');
  cells[2]= cell3.join( "" ).split(',');
  cells[3]= cell4.join( "" ).split(',');

  console.table( cells );
}