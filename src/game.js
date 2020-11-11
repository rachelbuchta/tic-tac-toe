class Game {
  constructor() {
    this.players = [new Player("1", "🌝"), new Player("2", "🪐")]
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
    } else {
      this.currentPlayer = this.players[0].token
    }
  }


  makeMove(index) {
    var currentMove = this.currentPlayer
    var emptySquare = ""
    if (this.board[index] === emptySquare) {
      this.board[index] += currentMove
      this.turns++
      this.populatePlayerData(index)
      this.gameDrawCheck()
      this.gameWinCheck()
      this.togglePlayers()
    }
  }

  populatePlayerData(index) {
    if (this.currentPlayer === this.players[0].token) {
      this.players[0].playerData.push(parseInt(index))
      return this.players[0].playerData
    } else {
      this.players[1].playerData.push(parseInt(index))
      return this.players[1].playerData
    }
  }

  gameWinCheck() {
    var playerOneData = this.players[0].playerData
    var playerTwoData = this.players[1].playerData
    if (playerOneData.length >= 3 || playerTwoData.length >= 3) {
      for (var i = 0; i < this.winningCombos.length; i++) {
        if (playerOneData.includes(this.winningCombos[i][0]) &&
          playerOneData.includes(this.winningCombos[i][1]) &&
          playerOneData.includes(this.winningCombos[i][2])) {
          this.gameRunning = false
          this.players[0].winner = true
          this.players[0].wins++
          this.playerWin = true
          this.players[0].saveWinsToStorage()
        } else if (playerTwoData.includes(this.winningCombos[i][0]) &&
          playerTwoData.includes(this.winningCombos[i][1]) &&
          playerTwoData.includes(this.winningCombos[i][2])) {
          this.gameRunning = false
          this.players[1].winner = true
          this.players[1].wins++
          this.playerWin = true
          this.players[1].saveWinsToStorage()
        }
      }
    }
  }

  gameDrawCheck() {
    if (this.turns === 9 && this.playerWin === false) {
      this.playerDraw = true
      this.gameRunning = false
    }
  }
}