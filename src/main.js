
var currentGame = new Game()
//querySelectors
var gameBoard = document.querySelector(".game-board")
var clickedSquare = document.querySelectorAll(".box")




//eventListeners
window.addEventListener("load", playGame)
gameBoard.addEventListener("click", selectSquare)


function playGame(index) {
currentGame.assignPlayer()
}

function selectSquare(event) {
console.log(event.target.id)
var squareIndex = event.target.id[event.target.id.length -1]
if(currentGame.board.includes(currentGame.currentTurn) === false) {
  currentGame.makeMove(squareIndex)
  console.log(squareIndex)
  for (var i = 0; i < clickedSquare.length; i ++) {
    clickedSquare[i].innerHTML = currentGame.board[i]
    }
    currentGame.populatePlayerData(squareIndex)

    currentGame.togglePlayers()
}
}





//browser opens with a fresh game
// playerOne is assigned
//playerOne clicks a sqaure and a X shows up
