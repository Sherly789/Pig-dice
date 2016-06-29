

var x;
var y;

//business logic
function Game(player1, player2) {
  player1 = 0;
  player2 = 0;
  this.player1Total = player1;
  this.player2Total = player2;
}

Game.prototype.rollDie1 = function() {
  x = Math.floor((Math.random() *6) + 1);
  this.player1Total += x;

  console.log(x);
}

Game.prototype.rollDie2 = function() {
  y = Math.floor((Math.random() *6) + 1);
  this.player2Total += y;

  console.log(y);
}





//user interface
$(document).ready(function() {
  var gameResult = new Game(x, y);
  $("#game1").submit(function(event) {
    event.preventDefault();

    gameResult.rollDie1();
    $("#result1").text("Player 1 results:" +""+ gameResult.player1Total);
  });

  $("#game2").submit(function(event){
    event.preventDefault();

    gameResult.rollDie2();
    $("#result2").text("Player 2 results:" +""+gameResult.player2Total);
  });

  $("#result").show();



});
