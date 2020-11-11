class Player {
  constructor(playerId, token) {
    this.id = playerId
    this.token = token
    this.wins = 0
    this.winner = false
    this.playerData = []
  }

  saveWinsToStorage() {
    localStorage.setItem(`player${this.id}`, JSON.stringify(this.wins))
  }

  retrieveWinsFromStorage() {
    var retrievedWins = JSON.parse(localStorage.getItem(`player${this.id}`))
    if (retrievedWins) {
      this.wins = retrievedWins
    }
  }
}