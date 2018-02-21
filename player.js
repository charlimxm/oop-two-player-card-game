class Player {
  constructor(id) {
    this.id = id;
    this.hand = [];
    this.points = 0;
  }

  addCards (cards) {
    this.hand.push(cards)
  }

  playTopCard () {
    return this.hand.pop()
  }

  reinsertCard (card) {
    let totalSpaces = this.hand.length + 1
    let randomIndex = Math.floor(Math.random() * totalSpaces)
    this.hand.splice(randomIndex, 0, card)
  }

  addPoints (points) {
    this.points += points
  }
}

module.exports = Player
