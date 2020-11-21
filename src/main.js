const currentGame = new Game()

//querySelectors
const gameBoard = document.querySelector(".game-board")
const clickedSquare = document.querySelectorAll(".box")
const gameStatus = document.querySelector("h1")
const playerOneWins = document.querySelector(".player-one-wins")
const playerTwoWins = document.querySelector(".player-two-wins")

//eventListeners
window.addEventListener("load", beginGame)
gameBoard.addEventListener("click", playGame)
// gameBoard.removeEventListener("click",)

function beginGame() {
  currentGame.assignPlayer()
  displayMessage()
  displayWins()
}

function playGame(event) {
  const squareIndex = event.target.id[event.target.id.length - 1]
  currentGame.makeMove(squareIndex)
  return clickedSquare.forEach((square, i) => {
    square.innerText = currentGame.board[i]
    displayMessage()
  })
}

const displayMessage = () => {
  if (!currentGame.playerWin) {
    gameStatus.innerText = `It's ${currentGame.currentPlayer}'s Turn!`
  }
  if (currentGame.playerDraw) {
    gameStatus.innerText = "It's a draw!"
    restartTimer()
  }
  if (currentGame.players[0].winner) {
    gameStatus.innerText = `${currentGame.players[0].token} Won!`
    displayWins()
    restartTimer()
  } else if (currentGame.players[1].winner) {
    gameStatus.innerText = `${currentGame.players[1].token} Won!`
    displayWins()
    restartTimer()
  }
}


const displayWins = () => {
  const playerOneStoredWins = currentGame.players[0].retrieveWinsFromStorage()
  const playerTwoStoredWins = currentGame.players[1].retrieveWinsFromStorage()
  const playerOneCount = currentGame.players[0].wins
  const playerTwoCount = currentGame.players[1].wins
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

const reloadPage = () => {
  window.location.reload()
}

const restartTimer = () => {
  window.setTimeout(reloadPage, 2000)
}
