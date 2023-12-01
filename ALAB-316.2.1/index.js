let win = false;
let guessesLeft = 10;
let attempts = 3;

let heatPlayers = [
  {
    name: "Jimmy Butler",
    number: 22,
    nickname: "Jimmy Buckets",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png"
  },
  {
    name: "Jaime Jaquez Jr.",
    number: 11,
    nickname: "Tripple J",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1631170.png",
  },
  {
    name: "Tyler Herro",
    number: 14,
    nickname: "No Limit Herro",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629639.png"
  },
];

randomNumber = Math.floor( Math.random() * heatPlayers.length );

function displayPlayer( player ){
  console.log( 'player ---> ', heatPlayers[player].image );
  let appEl = document.getElementById("app");
  let imageTag = document.createElement("img");

  imageTag.setAttribute( "src", heatPlayers[player].image );
  appEl.appendChild( imageTag );
}

displayPlayer( randomNumber );

let answer = "";
setTimeout( () => {
  answer = prompt('Name this player');

  if ( answer === heatPlayers[randomNumber].name ){
    console.log(`WINNER!!!! you found ${heatPlayers[randomNumber].name}`)
  } else {
    console.log( `Wrong!!! The correct name of the player is ${heatPlayers[randomNumber].name}` )
  }
}, 500 );