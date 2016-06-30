

var player1dice;
var y;
var player1Num = [];
var player2Num = [];
//business logic
function Game(player1score, player2,turnscore ) {
  player1score = 0;
  player2 = 0;
  this.player1Total = player1score;
  this.player2Total = player2;
  this.turnscore = turnscore

}

Game.prototype.rollDie1 = function() {
  player1dice = Math.floor((Math.random() *6) + 1);
  if (player1dice !== 1) {
    this.turnscore += player1dice;

  } else {
    this.turnscore = 0;

  }
  player1Num.push(player1dice);
  console.log(player1Num);
}

function stop () {
  var test = this.turnscore
  this.player1Total += this.turnscore
  console.log(test)

};

// Game.prototype.rollDie2 = function() {
//   y = Math.floor((Math.random() *6) + 1);
//   if (y === 1) {
//     player2Num.pop();
//     this.player2Total = player2Num.reduce(add, 0);
//       function add(a, b) {
//       return a + b;
//       }
//   } else {
//     player2Num.push(y);
//     this.player2Total = player2Num.reduce(add, 0);
//       function add(a, b) {
//       return a + b;
//       }
//   }
//   console.log(player2Num);
// }

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
