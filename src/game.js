class Game {
  constructor({playerOne: player, playerTwo: player, currentMove: currentMove}) {
    this.playerOne = player;   //
    this.playerTwo = player;  //
    this.currentMove = currentMove;   //selected table cell
    this.currentPlayer = currentPlayer;   //
    this.playerWin = false;
    this.playerDraw = false;

  }

  beginGame() {
    //user sees a token at the top indicating playerOne
    //playerOne clicks a square this.currentMove is updated  and is compared against winning combonations
    //togglePlayers()
    //player2 clicks a square and this.currentMove is updated and

  }

  togglePlayers() {

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
