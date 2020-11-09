//querySelectors
var gameBoard = document.querySelector(".gameboard")
var box0 = document.querySelector("#box0")
var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var box3 = document.querySelector("#box3")
var box4 = document.querySelector("#box4")
var box5 = document.querySelector("#box5")
var box6 = document.querySelector("#box6")
var box7 = document.querySelector("#box7")
var box8 = document.querySelector("#box8")
//event delegation - use after the inital rendering



//eventListeners
window.addEventListener("load", startNewGame)



function startNewGame() {
    var playerOne = new Player("one", "X")
    var playerTwo = new Player("two", "O")
    var currentGame = new Game(playerOne, playerTwo)

    //
      debugger
    currentGame.assignPlayer()
    // currentGame.playGame()
    currentGame.playGame()
    // JSON.stringify(playerOne)
    // JSON.stringify(playerTwo)
    console.log(playerOne)
    console.log(currentGame.board)

    // currentGame.makeMove(2)
    // console.log(currentGame.board)
    // currentGame.togglePlayers()
    //user sees a token at the top indicating playerOne
    //playerOne clicks a square this.currentMove is updated  and is compared against winning combonations
    //togglePlayers()
    //player2 clicks a square and this.currentMove is updated and

  }
