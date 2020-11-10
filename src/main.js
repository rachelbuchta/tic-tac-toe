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
  togglePlayerMessage()
}

function playGame(event) {
  var squareIndex = event.target.id[event.target.id.length - 1]
  currentGame.makeMove(squareIndex)
  for (var i = 0; i < clickedSquare.length; i++) {
    clickedSquare[i].innerText = currentGame.board[i]
  }
  chooseMessage()
}

function displayDrawMessage() {
  gameStatus.innerText = "It's A Draw!"
}

function togglePlayerMessage() {
  gameStatus.innerText = `It's ${currentGame.currentPlayer} Turn!`
}

function displayWinnerMessage() {
  gameStatus.innerText = `${currentGame.currentPlayer} Won!`
}

function chooseMessage() {
  if (currentGame.gameRunning === true) {
    togglePlayerMessage()
  } else if (currentGame.playerDraw === true) {
    displayDrawMessage()
  } else if (currentGame.players.winner === true) {
    displayWinnerMessage()
  }
}

function restartGame() {
if (currentGame.playerDraw === true) {
restartTimer()
beginGame()
}
}


function restartTimer() {
  setTimeout(restartGame, 1000)
  }
