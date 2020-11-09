class Game {
  constructor (playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentTurn = null;
    this.board =  ["", "", "", "", "","","","",""]
    this.winningCombos = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,4,8],
     [2,4,6],
     [0,3,6],
     [1,4,7],
     [2,5,8]
   ];
    this.gameData = []
    this.gameRunning = false;
    this.playerWin = false;
    this.playerDraw = false;
    this.turns = 0;

  }

assignPlayer() {
 this.gameRunning = true;
 if(this.currentTurn === null) {
   this.currentTurn = this.playerOne.token;
   return this.currentTurn;
  }
}

  togglePlayers() {
    if(this.currentTurn === this.playerOne.token) {
      this.currentTurn = this.playerTwo.token
    } else if (this.currentTurn === this.playerTwo.token) {
     this.currentTurn = this.playerOne.token
    }
    // return this.currentTurn
        this.makeMove()
  }





makeMove(index) {
  var currentMove = this.currentTurn
  var emptySquare = ""
  if (this.board[index] === emptySquare) {
    this.board[index] += currentMove
    this.turns ++
  }
  this.populateWinnerData(index)
  this.gameComboCheck()
  this.gameDrawCheck()
  // this.togglePlayers()
}

  populateWinnerData(index) {
    if(this.currentTurn === this.playerOne.token) {
      this.playerOne.playerData.push(index)
    } else if (this.currentTurn === this.playerTwo.token) {
      this.playerTwo.playerData.push(index)
    }
  }

gameComboCheck() {
  if (this.playerOne.playerData.length ===3 || this.playerTwo.playerData.length === 3) {
  for (var i = 0; i < this.winningCombos.length; i++) {
    var combo = this.winningCombos[i];
    for(var j = 0; j < combo.length; j ++) {
      if(combo[j] === this.playerOne.playerData) {
        this.playerWin = true;
        this.playerOne.wins++
      } else if(combo[j] === this.playerTwo.playerData) {
        this.playerWin = true;
        this.playerTwo.wins++
      }
      }
    }
  } else {
    this.togglePlayers()
  }
}


  // with each move did they win? Comparing stored moves to winning combonation object each combo is an array of three (8 combos)
 // returns a boolean if false then toggle player
// if true game ends and restarts after a couple seconds
// change respective scores (score model) push into players array what there winning combos

gameDrawCheck() {
  if(this.turns === 9) {
    this.playerDraw = true
    this.gameRunning = false
    return "It's A Draw"
  } else {
    this.togglePlayers()
  }
}

restartGame() {
  // who won the most recent game
}
}

// shoudld i push each players move to its own stored data array and then check them agains winning comboas?
// would i use  a for loop and conditional?
//best way to go about clicking sqaures.. shoudld i make each square a button or do it by event.target.classlsit?
//gameflow?
//how to use player class in game class
