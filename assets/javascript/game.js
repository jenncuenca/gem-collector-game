$(document).ready(function() {
 
// Win-Loss Variables
var wins = 0;
var loses = 0;

//Player's Score Variable 
var userGemTotal = 0; // sum of all gem values
$("#playerScore").text(userGemTotal);

// Gem Value Variables
var greenGem = Math.floor(Math.random() * 12) + 1;
var pinkGem = Math.floor(Math.random() * 12) + 1;
var blueGem = Math.floor(Math.random() * 12) + 1;
var orangeGem = Math.floor(Math.random() * 12) + 1;

//Random Number gets generated
var numToBeMatched = 19 + Math.floor(Math.random()*120);
$("#random-number").text(numToBeMatched);

//WIN CONDITION: If user Gem clicks match the Randomly Generated Number 
if (userGemTotal === numToBeMatched){
    wins += 1; // wins increase by 1.
    alert("Congratulations! YOU WIN!!"); // informs user of win
}

//LOSS CONDITION: If user Gem clicks are more than Randomly Generated Number
else if (userGemTotal >= numToBeMatched){
    losses += 1; // losses increase by 1.
    alert("You lose!"); // informs user of loss
}

// gems generate a random number

//Gem 1
$("#greenGem").on("click", function(){
    userGemTotal = userGemTotal + greenGem;
    $("#playerScore").text(userGemTotal);
  });

//Gem 2
$("#pinkGem").on("click", function(){
    userGemTotal = userGemTotal + pinkGem;
    $("#playerScore").text(userGemTotal);
  });

//Gem 3

$("#blueGem").on("click", function(){
    userGemTotal = userGemTotal + blueGem;
    $("#playerScore").text(userGemTotal);
  });

//Gem 4
$("#orangeGem").on("click", function(){
    userGemTotal = userGemTotal + orangeGem;
    $("#playerScore").text(userGemTotal);
  });

//score tracking

});
