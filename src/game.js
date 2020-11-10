class Game {
  constructor() {
    this.players = [new Player('1', '🌝'), new Player('2', '🪐')]
    this.currentPlayer = null
    this.board = ["", "", "", "", "", "", "", "", ""]
    this.winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    this.gameRunning = false
    this.playerWin = false
    this.playerDraw = false
    this.turns = 0
  }

  assignPlayer() {
    this.gameRunning = true
    if (this.currentPlayer === null) {
      this.currentPlayer = this.players[0].token;
    }
  }

  togglePlayers() {
    if (this.currentPlayer === this.players[0].token) {
      this.currentPlayer = this.players[1].token
    } else if (this.currentPlayer === this.players[1].token) {
      this.currentPlayer = this.players[0].token
    }
  }

  makeMove(index) {
    var currentMove = this.currentPlayer
    var emptySquare = ""
    if (this.board[index] === emptySquare) {
      this.board[index] += currentMove
      this.populatePlayerData(index)
      this.turns++
      this.gameDrawCheck()
      this.gameWinCheck()
      this.togglePlayers()
    }
  }

  populatePlayerData(index) {
    if (this.currentPlayer === this.players[0].token) {
      this.players[0].playerData.push(index)
      return this.players[0].playerData
    } else if (this.currentPlayer === this.players[1].token) {
      this.players[1].playerData.push(index)
      return this.players[1].playerData
    }
  }

  gameWinCheck() {
    if (this.players[0].playerData.length >= 3 || this.players[1].playerData.length >= 3) {
      debugger
      for (var i = 0; i < this.winningCombos.length; i++) {
        var combo = this.winningCombos[i]
        // for (var j = 0; j < combo.length; j++) {
          // var winningCombo = combo[j]
          if (this.players[0].playerData.includes(this.winningCombos[i])) {
            this.players[0].winner = true
            this.players[0].wins ++
            this.playerWin = true
          } else if (this.players[1].playerData.includes(this.winningCombos[i])) {
            this.players[1].winner = true
            this.players[1].wins ++
            this.playerWin = true
          // }
          }
        }
      }
   }


 // (combo[j] === this.players[0].playerData) {
 //   this.playerWin = true;
 //   this.players[0].wins++
 // } else if (combo[j] === this.players[1].playerData) {
 //   this.playerWin = true;
 //   this.players[1].wins++
  //array prortype .includes



  gameDrawCheck() {
    if (this.turns === 9 && this.playerWin === false) {
      this.playerDraw = true
      this.gameRunning = false
      this.restartGame()
    }
  }

  restartGame() {
    if (this.playerWin === true || this.playerDraw === true) {
      this.turns = 0
      this.board = ["", "", "", "", "", "", "", "", ""]
      this.players[0].playerData = []
      this.players[1].playerData = []
    }
  }
}
