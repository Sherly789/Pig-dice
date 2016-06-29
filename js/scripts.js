

var x;
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
  x = Math.floor((Math.random() *6) + 1);
  if (x === 1) {
    player1Num.pop();
    this.player1Total = player1Num.reduce(add, 0);
      function add(a, b) {
      return a + b;
      }
  } else {
    player1Num.push(x);
    this.player1Total = player1Num.reduce(add, 0);
      function add(a, b) {
      return a + b;
      }
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
  var gameResult = new Game(x, y);
  $("#game1").submit(function(event) {
    event.preventDefault();

    gameResult.rollDie1();
    gameResult.win();
    $("#result1").text("Player 1 results: " +""+ gameResult.player1Total + ", " + "Current Roll: " + x);
  });

  $("#game2").submit(function(event){
    event.preventDefault();

    gameResult.rollDie2();
    gameResult.win();
    $("#result2").text("Player 2 results: " +""+gameResult.player2Total + ", " + "Current Roll: " + y);
  });
});
