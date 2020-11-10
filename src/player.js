class Player {
  constructor(playerId, token) {
    this.id = playerId
    this.token = token
    this.wins = 0
    this.winner = false
    this.playerData = []
  }

  saveWinsToStorage() {
    localStorage.setItem("this.wins", JSON.stringify(this.wins))
  }

  retrieveWinsFromStorage() {

  }

}
