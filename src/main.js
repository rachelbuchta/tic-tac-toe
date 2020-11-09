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
  gameStatus.innerText = `It's ${currentGame.currentTurn} Turn!`
}

function playGame(event) {
  var squareIndex = event.target.id[event.target.id.length - 1]
  currentGame.makeMove(squareIndex)
  for (var i = 0; i < clickedSquare.length; i++) {
    clickedSquare[i].innerHTML = currentGame.board[i]
  }
  currentGame.populatePlayerData(squareIndex)
  chooseMessage()
}

function displayDrawMessage() {
    gameStatus.innerHTML = "It's A Draw!"
  }

function togglePlayerMessage() {
  gameStatus.innerText = `It's ${currentGame.currentTurn} Turn!`
}

function chooseMessage() {
  if (currentGame.gameRunning === true) {
    togglePlayerMessage()
  } else if (currentGame.playerDraw === true) {
    displayDrawMessage()
  }
}

// if the current square includes a token, don't let it be clicked and dont toggle players
// if the square doesnt include a token, let it be clicked, make move and toggle players
  // if(currentGame.board[squareIndex].includes(currentGame.currentTurn) === false) {



//browser opens with a fresh game
// playerOne is assigned
//playerOne clicks a sqaure and a X shows up
