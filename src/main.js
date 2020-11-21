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

function beginGame() {
  currentGame.assignPlayer()
  displayMessage()
  retrieveAndDisplayWins()
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
  generatePlayerWinMessage(0)
  generatePlayerWinMessage(1)
}

const generatePlayerWinMessage = (index) => {
  if (currentGame.players[index].winner) {
    gameStatus.innerText = `${currentGame.players[index].token} Won!`
    gameBoard.removeEventListener("click", playGame)
    retrieveAndDisplayWins()
    restartTimer()
  }
}

const retrieveAndDisplayWins = () => {
  currentGame.players[0].retrieveWinsFromStorage()
  currentGame.players[1].retrieveWinsFromStorage()
  generateAmountOfWinsMessage(0, playerOneWins)
  generateAmountOfWinsMessage(1, playerTwoWins)
}

const generateAmountOfWinsMessage = (index, playerWins) => {
  if (currentGame.players[index].wins === 1) {
    playerWins.innerText = `${currentGame.players[index].wins} Win`
  } else {
    playerWins.innerText = `${currentGame.players[index].wins} Wins`
  }
}

const reloadPage = () => {
  window.location.reload()
}

const restartTimer = () => {
  window.setTimeout(reloadPage, 2000)
}
