# tic-tac-toe
Final Mod1 Solo Project

The game of Tic-Tac-Toe: A game as old at time and A game that is known for its simplicity and prevelence around the world.

Building this game on the other hand, has lead me to a new appreciation its complexities. In this project, I was able to put into practice the foundations of Javascript, HTML and CSS I have built over the last several weeks. It challenged me to plan and problem solve. As well as, brought me a greater understanding of the difference between the data model and DOM, made me more comfortable with building complex functions and using for loops and array prototypes to iterate over data.


## Teachnologies and Skills

This game is made using:
  * Clean HTML and CSS to match comp while still giving it a bit of my own flair.
  * Vanilla Javascript to create an interactive game and JSON to implement client-side data persistence using localStorage

I ensured best practices:

  * Separating the data model (using classes) and DOM model
  * Implementing helper functions to keep code clean and demonstrate DRYness and SRP.
  * Using atomic commits and creating branches that reflect the current feature I am working on.
  
 ## Contributors
 
 Project implementation by Rachel Buchta
 
 Project created by Turing School staff.
 
 Special thanks to Scott Schipke, John Adams, our 2010 FE Cohort instructors and peers.
 
 ## Features
 
 ### User Functionality
 
 On page load, a tic-tac-toe board appears indicating who the first player is.
 
 #### As a user,
 
  * The first player is able to click any square they desire and a symbol of a moon will appear indicating their player token.
  * The game then switches to player two, as shown at the top of the board with the symbol of saturn.
  * Player Two is then able to click any square that is empty.
    * Note: If a player clicks on a square that is already taken, that square will not be replaced. That currrent player must choose an available square before         switching to the next player.
  * This continues back and forth between players until either a win or draw is achieved.
  
#### To win,

   * In order for a player to win, there are 8 possible combinations that can be played. 
     * Combinations include: 3 across, 3 vertically or 2 diagnol.
   * Once a player has won, the number of games won are displayed on their respective panels and persist after pageload.
   * When a game ends in either a win or draw, the game automatically restarts after a few seconds.
