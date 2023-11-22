{
  const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

  let currentCell = 1;
  let cell1 = [];
  let cell2 = [];
  let cell3 = [];
  let cell4 = [];
  let cells = [];

  let cellsContainer = [];

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

  let findKeys = null;
  let findValues = [];

  cells.forEach( ( e, i ) => {
    if ( e[0] === 'ID' ) {
      findKeys = e;
    } else {
      findValues.push( e );
    }
  });
  

  findValues.forEach( (e, i )  => {
    let personData = {}
    for (let index = 0; index < findKeys.length; index++) {
      personData[findKeys[index]] = e[index]
    }

    cellsContainer[i] = personData;
  });

  cellsContainer.forEach( e => {
    console.table(e);
  });
  
  cellsContainer.pop();
  cellsContainer.splice( 1, 0, { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" } );

  cellsContainer.push( { ID: "7", Name: "Bilbo", Occupation: "None", Age: "111" } );
  
  console.log( cellsContainer );

  let addAges = 0;
  let newCSV = Object.keys( cellsContainer[0] ).toString() + "\n";

  cellsContainer.forEach( ( e, i ) => {
    addAges = addAges + parseInt( e['Age'] );
    newCSV = newCSV + Object.values( e ).toString() + "\n"
  });

  console.log( 'newCSV ---> ', newCSV );
  console.log ( `The average age of the group is ${addAges / cellsContainer.length}`);

  console.log( 'cellsContainer -----> ', cellsContainer );
}