# tic-tac-toe
Final Mod1 Solo Project

The game of Tic-Tac-Toe: A game as old at time and A game that is known for its simplicity and prevelence around the world.

Building this game on the other hand, has lead me to a new appreciation its complexities. In this project, I was able to put into practice the foundations of Javascript, HTML and CSS I have built over the last several weeks. It challenged me to plan and problem solve. As well as, brought me a greater understanding of the difference between the data model and DOM, made me more comfortable with building complex functions and using for loops and array methods to iterate over data.


## Teachnologies and Skills

This game is made using:
  * Clean HTML and CSS to match comp while still giving it a bit of my own flair.
  * Vanilla Javascript to create an interactive game and JSON to implement client-side data persistence using localStorage

I ensured best practices:

  * Separating the data model (using classes) and DOM model
  * Implementing helper functions to keep code clean and demonstrate DRYness and SRP.
  * Using atomic commits and creating branches that reflect the current feature I am working on.
  
 ## Contributors
 
 Project implementation by [Rachel Buchta](https://github.com/rachelbuchta)
 
 Project created by Turing School staff.
 
 Special thanks to [Scott Schipke](https://github.com/sschipke), John Adams, [Cooper Terrones](https://github.com/coopterrones) our 2010 FE Cohort instructors and peers.
 
 ## Future Iterations
 
 Currently, there are no planned additions to this tic-tac-toe game.
 
 If I did, I would add a feature to play against the computer and add the winning boards to the respective player. It would also be cool to have and animation    that shot a shooting star across the board when a player has won.
 
 ## Features
 
 ### User Functionality
 
 On page load, a tic-tac-toe board appears indicating at the top of the page who the first player is.
 #### Main View
 Screen Shot 2020-11-10 at 7.22.34 PM
 
 #### As a user,
 
  * The first player is able to click any square they desire and a symbol of a moon will appear indicating spot on the board.
  * The game then switches to player two, as shown at the top of the board with the symbol of saturn.
  * Player Two is then able to click any square that is empty.
    * Note: If a player clicks on a square that is already taken, that square will not be replaced. The currrent player must choose an available square before         switching to the next player.
  * This continues back and forth between players until either a win or draw is achieved.
  
#### To win,

   * In order for a player to win, there are 8 possible combinations that can be played. 
     * Combinations include: 3 across, 3 vertically or 2 diagnol.
   * Once a player has won, the number of games won are displayed in their respective panels and persist after pageload.
   * The players a alerted with a "You Won" message above the board.
   * If the game ends in a draw, players are alerted with "It's a Draw!" Message.
   * When a game ends in either a win or draw, the game automatically restarts after a few seconds ready for the next round!
