class Player {
  constructor(playerId, token) {
    this.id = playerId // "one" or "two"
    this.token = token;
    this.wins = 0;
    this.playerData = []
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }

  stringify() {
    JSON.stringify(this)
  }
}
