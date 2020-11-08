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




//eventListeners
window.addEventListener("load", startNewGame)



function startNewGame(game) {
debugger
    var currentGame = new Game()
    currentGame.gameRunning = true;
    // currentGame.currentTurn = game.playerOne
    currentGame.assignPlayer()
    currentGame.togglePlayers()

    console.log(this.playerOne)
    console.log(this.newBoard)
    //user sees a token at the top indicating playerOne
    //playerOne clicks a square this.currentMove is updated  and is compared against winning combonations
    //togglePlayers()
    //player2 clicks a square and this.currentMove is updated and

  }
