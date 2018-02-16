

var wins = 0;
var loses = 0;
var userGemTotal = 0;



$(document).ready(function() {

//Random Number Gets Generated
var numToBeMatched = 19 + Math.floor(Math.random()*120);
$("#random-number").text(numToBeMatched);

//WIN CONDITION: If user Gem clicks match the Randomly Generated Number 
if (userGemTotal === NumToBeMatched){
    wins += 1; // wins increase by 1.
    alert("Congratulations! YOU WIN!!"); // informs user of win
}

//LOSS CONDITION: If user Gem clicks are more than Randomly Generated Number
else if (userGemTotal > NumToBeMatched) {
    losses += 1; // losses increase by 1.
}


// gems generate a random number that is unseen
$("#random-button").on("click", function(){
    var random = Math.floor(Math.random() * 12) + 1;
    $("#random-number").text(random);
    $("#random-number").append("<br>");
  })

//gem buttons?
$(".normal-button").on("click", function() {
    //value generated
});

//score tracking

})