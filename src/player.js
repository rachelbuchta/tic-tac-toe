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
    for(var i = 0; i < localStorage.length; i ++) {
    var retrievedWins = JSON.parse(localStorage.getItem(`player${this.id}`))
}
  }

}
