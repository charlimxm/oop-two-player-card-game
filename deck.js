var Card = require('./card')

class Deck {
  constructor () {
    this.names = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    this.cards = [];

    for (var s = 0; s < this.suits.length; s++) {
      for (var n = 0; n < this.names.length; n++) {
        this.cards.push(new Card(n + 1, this.names[n], this.suits[s]))
      }
    }
    
    this.shuffle()
  }

  shuffle () {
    let currentIndex = this.cards.length
    let temporaryValue
    let randomIndex
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = this.cards[currentIndex]
      this.cards[currentIndex] = this.cards[randomIndex]
      this.cards[randomIndex] = temporaryValue
    }
  }

  deal () {
    let cardsPerPerson = 26
    let hand1 = this.cards.slice(0, 26)
    let hand2 = this.cards.slice(26, 52)
    let hands = []
    hands.push(hand1)
    hands.push(hand2)
    return hands
  }
}

module.exports = Deck
