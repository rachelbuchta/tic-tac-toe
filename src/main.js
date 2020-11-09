//querySelectors
var gameBoard = document.querySelector(".game-board")

//event delegation - use after the inital rendering



//eventListeners
window.addEventListener("load", beginGame)
// gameBoard.addEventListener("click", selectSquare)



function beginGame(index) {
    var playerOne = new Player("one", "X")
    var playerTwo = new Player("two", "O")
    var currentGame = new Game(playerOne, playerTwo)
    debugger
    currentGame.assignPlayer()
    currentGame.makeMove(1)
    // JSON.stringify(playerOn
    // JSON.stringify(playerTwo)
  }

// function selectSquare(event, currentGame) {
//   if(event.target.closest('.box')) {
//     var clickedSquare = event.target.closest(".box")
//     clickedSquare.innerText =
//   }
// }



//browser opens with a fresh game
// playerOne is assigned
//playerOne clicks a sqaure and a X shows up
