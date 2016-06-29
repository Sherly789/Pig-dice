
var x = Math.floor((Math.random() *6) + 1);
var y = Math.floor((Math.random() *6) + 1);

//business logic
function Game(player1, player2) {
  player1 = 0;
  player2 = 0;
  this.player1Total = player1;
  this.player2Total = player2;
}

Game.prototype.rollDie1 = function(x) {
  this.player1Total += x;

  console.log(x);
}

Game.prototype.rollDie2 = function(y) {
  this.player2Total += y;

  console.log(y);
}





//user interface
$(document).ready(function() {
  var gameResult = new Game(x, y);
  $("#game1").submit(function(event) {
    event.preventDefault();

    gameResult.rollDie1(x);
    $("#result").text(gameResult.player1Total);
  });

  $("#game2").submit(function(event){
    event.preventDefault();

    gameResult.rollDie2(y);
    $("#result").text(gameResult.player2Total);
  });

  $("#result").show();



});
