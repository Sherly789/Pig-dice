

var x;
var y;
var number1 = [];
var number2 = [];

//business logic
function Game(player1, player2) {
  player1 = 0;
  player2 = 0;
  this.player1Total = player1;
  this.player2Total = player2;
  // this.player1Num = [];
  // this.player2Num = [];
}

Game.prototype.rollDie1 = function() {
  x = Math.floor((Math.random() *6) + 1);
  if (x === 1) {
    this.player1Total === 0;
  } else {
    this.player1Total += x;
  }
  console.log(x);
}

Game.prototype.rollDie2 = function() {
  y = Math.floor((Math.random() *6) + 1);
  if (y === 1) {
    this.player2Total === 0;
  } else {
    this.player2Total += y;
  }
  console.log(y);
}

Game.prototype.win = function() {
  if (this.player1Total >= 100 || this.player2Total >= 100) {
    alert ("you are a winner!");
  }
}

//user interface
$(document).ready(function() {
  var gameResult = new Game(x, y, number1, number2);
  $("#game1").submit(function(event) {
    event.preventDefault();

    gameResult.rollDie1();
    gameResult.win();
    $("#result1").text("Player 1 results: " +""+ gameResult.player1Total+ ", " + "Current Roll: " + x);
  });

  $("#game2").submit(function(event){
    event.preventDefault();

    gameResult.rollDie2();
    gameResult.win();
    $("#result2").text("Player 2 results: " +""+gameResult.player2Total + ", " + "Current Roll: " + y);
  });
});
