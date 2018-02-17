$(document).ready(function() {
 
// Variables
var wins = 0;
var loses = 0;
var userGemTotal = 0;

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
    var gemValue = Math.floor(Math.random() * 12) + 1;
    $("#playerScore").text(gemValue);
  });

//Gem 2
$("#pinkGem").on("click", function(){
    var gemValue = Math.floor(Math.random() * 12) + 1;
    $("#playerScore").text(gemValue);
  });

//Gem 3

$("#blueGem").on("click", function(){
    var gemValue = Math.floor(Math.random() * 12) + 1;
    $("#playerScore").text(gemValue);
  });

//Gem 4
$("#orangeGem").on("click", function(){
    var gemValue = Math.floor(Math.random() * 12) + 1;
    $("#playerScore").text(gemValue);
  });

//score tracking

});
