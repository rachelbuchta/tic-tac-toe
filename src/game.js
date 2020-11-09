class Game {
  constructor () {
    this.playerOne = "X"
    this.playerTwo = "O"
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
  if(this.currentTurn === null) {
    this.currentTurn = this.playerOne;
    return this.currentTurn;
  }
}

  togglePlayers() {
    if(this.currentTurn === this.playerOne) {
      this.currentTurn = this.playerTwo
    } else if (this.currentTurn === this.playerTwo) {
     this.currentTurn = this.playerOne
    }
    return this.currentTurn

  }

  makeMove(index) {
    var currentMove = this.currentTurn
    var emptySquare = ""
      if (this.board[index] === emptySquare) {
        this.board[index] += currentMove
        this.turns ++
        this.togglePlayers()
        return this.board
      }
    }


  storePlayerOneMoves() {
   //after the first click, store that players place in the table
 }

 storePlayerTwoMoves() {
   //
 }

gameWinCheck() {
  // with each move did they win? Comparing stored moves to winning combonation object each combo is an array of three (8 combos)
} // returns a boolean if false then toggle player
// if true game ends and restarts after a couple seconds
// change respective scores (score model) push into players array what there winning combos

gameDrawCheck() {
  if(this.turns === 9) {
    this.playerDraw = true
    return "It's A Draw"
  }
}

restartGame() {
  // who won the most recent game
}
}

//create winning combo object in game class

// game starts with an empty board
