class Game {
  constructor({playerOne: player, playerTwo: player, currentMove: currentMove, currentTurn: currentTurn }) {
    this.id = Date.now();
    this.playerOne = player.playerNumber;
    this.playerTwo = player.playerNumber;
    this.currentMove = currentMove;
    this.currentTurn = currentTurn;
    this.playerWin = false;
    this.playerDraw = false;

  }
}
