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
    restartGame()
  }
  if (currentGame.players[0].winner === true) {
    gameStatus.innerText = `${currentGame.players[0].token} Won!`
    displayWins()
    // restartGame()
  } else if (currentGame.players[1].winner === true) {
    gameStatus.innerText = `${currentGame.players[1].token} Won!`
    displayWins()
    // restartGame()
  }
}

function displayWins() {
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


function restartGame() {

restartTimer()
beginGame()

}

//function that triggers the time timmeout when its a win or draw
// function restartTimer() {
//   window.setTimeout(restartGame, 6000)
//   }

  // window.setTimeout(resetGame, 6000)
