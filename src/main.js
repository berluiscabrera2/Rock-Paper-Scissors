// Select the Rock, Paper and Scissors buttons from the HTML file by ID
let rockBtn = document.querySelector("#rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorsBtn = document.querySelector("#scissorsBtn");

//Variables to store the player's move, the computer's move and the result of the match, respectively
let player;
let computer;
let result;



//Handle click when player hits the "Rock" Button
rockBtn.addEventListener("click", () => {
  player = 'ROCK';
  computerPlay();
  console.log(player);
  console.log(computer);
  if(computer == 'SCISSORS'){
    result = "YOU WON!"
  } else if(computer == 'PAPER'){
    result = "YOU LOST!"
  } else {
    result = "IT'S A DRAW"
  }

  document.getElementById('playerText').innerHTML = `Player: ${player}`;
  document.getElementById('computerText').innerHTML = `Computer: ${computer}`;
  document.getElementById('resultText').innerHTML = `Result: ${result}`;

});



//Handle click when player hits the "Paper" Button
paperBtn.addEventListener("click", () => {
  player = 'PAPER';
  computerPlay();

  if(computer == 'SCISSORS'){
    result = "YOU LOST!"
  } else if(computer == 'ROCK'){
    result = "YOU WON!"
  } else {
    result = "IT'S A DRAW"
  }

  document.getElementById('playerText').innerHTML = `Player: ${player}`;
  document.getElementById('computerText').innerHTML = `Computer: ${computer}`;
  document.getElementById('resultText').innerHTML = `Result: ${result}`;

});


//Handle click when player hits the "Scissors" Button
scissorsBtn.addEventListener("click", () => {
  player = 'SCISSORS';
  computerPlay();

  if(computer == 'ROCK'){
    result = "YOU LOST!"
  } else if(computer == 'PAPER'){
    result = "YOU WON!"
  } else {
    result = "IT'S A DRAW"
  }

  document.getElementById('playerText').innerHTML = `Player: ${player}`;
  document.getElementById('computerText').innerHTML = `Computer: ${computer}`;
  document.getElementById('resultText').innerHTML = `Result: ${result}`;
  
});



//Store random value for the computer
const computerPlay = () => {
  computer = Math.floor(Math.random() * 3) + 1;

  switch(computer){
    case 1:
      computer = 'ROCK';
      break;
    case 2:
      computer = 'PAPER';
      break;
    case 3:
      computer = 'SCISSORS';
      break;
  }
}