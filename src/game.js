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
    // this.currentMove = currentMove;   //selected table cell
    // this.currentPlayer = currentPlayer;   //
    this.gameRunning = false;
    this.playerWin = false;
    this.playerDraw = false;

  }

assignPlayer() {
  if(this.currentTurn === null) {
    this.currentTurn = this.playerOne;
    return this.currentTurn;
  }

}
// present an empty newBoard
//

startNewGame(player, newBoard, currentMove) {
    var newGame = new Game(player, newBoard, currentMove)
    console.log(this.player)
    console.log(this.newBoard)
    //user sees a token at the top indicating playerOne
    //playerOne clicks a square this.currentMove is updated  and is compared against winning combonations
    //togglePlayers()
    //player2 clicks a square and this.currentMove is updated and

  }

  togglePlayers() {
    if(this.currentTurn === this.playerOne) {
      this.currentTurn = this.playerTwo
    } else {
     this.currentTurn = this.playerOne
    }
    return this.currentTurn
  }

  makeMove(i) {

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

}

restartGame() {
  // who won the most recent game
}
}

//create winning combo object in game class

// game starts with an empty board
