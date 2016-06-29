
var x = Math.floor((Math.random() *6) + 1);
var y = Math.floor((Math.random() *6) + 1);

//business logic
function Game(player1, player2) {
  this.player1Total = player1;
  this.player2Total = player2;
}

Game.prototype.rollDie = function(x, y) {
  this.player1Total += x;
  this.player2Total += y;

  console.log(x, y);

}

// Game.prototype.rollDie2 = function(y) {
//   this.player2Total = y;
//
//   console.log(y);
// }





//user interface
$(document).ready(function() {
  var gameResult = new Game(x, y);
  $("#game1").submit(function(event) {
    event.preventDefault();

    gameResult.rollDie(x);
  });

  $("#game2").submit(function(event){
    event.preventDefault();

    gameResult.rollDie(y);
  });

  $("#result").show();
  $("#result").text();
});
