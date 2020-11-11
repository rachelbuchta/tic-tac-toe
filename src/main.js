var currentGame = new Game()

//querySelectors
var gameBoard = document.querySelector(".game-board")
var clickedSquare = document.querySelectorAll(".box")
var gameStatus = document.querySelector("h1")
var playerOneWins = document.querySelector(".player-one-wins")
var playerTwoWins = document.querySelector(".player-two-wins")

//eventListeners
window.addEventListener("load", beginGame)
gameBoard.addEventListener("click", playGame)

function beginGame() {
  currentGame.assignPlayer()
  displayMessage()
  displayWins()
}

function playGame(event) {
  var squareIndex = event.target.id[event.target.id.length - 1]
  currentGame.makeMove(squareIndex)
  for (var i = 0; i < clickedSquare.length; i++) {
    clickedSquare[i].innerText = currentGame.board[i]
  }
  displayMessage()
}

function displayMessage() {
  if (currentGame.playerWin === false) {
    gameStatus.innerText = `It's ${currentGame.currentPlayer} Turn!`
  }
  if (currentGame.playerDraw === true) {
    gameStatus.innerText = "It's a draw!"
    restartTimer()
  }
  if (currentGame.players[0].winner === true) {
    gameStatus.innerText = `${currentGame.players[0].token} Won!`
    displayWins()
    restartTimer()
  } else if (currentGame.players[1].winner === true) {
    gameStatus.innerText = `${currentGame.players[1].token} Won!`
    displayWins()
    restartTimer()
  }
}

function displayWins() {
  var playerOneStoredWins = currentGame.players[0].retrieveWinsFromStorage()
  var playerTwoStoredWins = currentGame.players[1].retrieveWinsFromStorage()
  var playerOneCount = currentGame.players[0].wins
  var playerTwoCount = currentGame.players[1].wins
  if (playerOneCount === 1) {
    playerOneWins.innerText = `${playerOneCount} Win`
  } else if (playerOneCount > 1) {
    playerOneWins.innerText = `${playerOneCount} Wins`
  }
  if (playerTwoCount === 1) {
    playerTwoWins.innerText = `${playerTwoCount} Win`
  } else if (playerTwoCount > 1) {
    playerTwoWins.innerText = `${playerTwoCount} Wins`
  }
}

function reloadPage() {
  window.location.reload()
}

function restartTimer() {
  window.setTimeout(reloadPage, 5000)
}
