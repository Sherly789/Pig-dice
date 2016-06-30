

var player1dice;
var y;
var player1Num = [];
var player2Num = [];
//business logic
function Game(player1, player2) {
  player1 = 0;
  player2 = 0;
  this.player1Total = player1;
  this.player2Total = player2;

}

Game.prototype.rollDie1 = function() {
  player1dice = Math.floor((Math.random() *6) + 1);
  if (player1dice !== 1) {
    player1Num.push(player1dice);
    this.player1Total += player1dice

  } else {
    this.player1Total = 0

  }
  console.log(player1Num);
}

Game.prototype.rollDie2 = function() {
  y = Math.floor((Math.random() *6) + 1);
  if (y === 1) {
    player2Num.pop();
    this.player2Total = player2Num.reduce(add, 0);
      function add(a, b) {
      return a + b;
      }
  } else {
    player2Num.push(y);
    this.player2Total = player2Num.reduce(add, 0);
      function add(a, b) {
      return a + b;
      }
  }
  console.log(player2Num);
}

Game.prototype.win = function() {
  if (this.player1Total >= 100 || this.player2Total >= 100) {
    alert ("you are a winner!");
  }
}

//user interface
$(document).ready(function() {
  var gameResult = new Game(player1dice, y);
  $("#game1").submit(function(event) {
    event.preventDefault();

    gameResult.rollDie1();
    gameResult.win();
    $("#resultA").text("Current Roll: " + player1dice);

  });
  $("#hold1").submit(function(event){
    event.preventDefault();
    $("#result1").text("Player 1 current results: " +""+gameResult.player1Total);
  });

  $("#game2").submit(function(event){
    event.preventDefault();

    gameResult.rollDie2();
    gameResult.win();
    $("#resultB").text("Current Roll: " + y);
  });

  $("#hold2").submit(function(event){
    event.preventDefault();
    $("#result2").text("Player 2 current results " + "" + gameResult.player2Total);
  });
});
