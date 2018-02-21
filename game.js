const Deck = require('./deck')
const Player = require('./player')

class Game {
  constructor () {
    this.deck = new Deck()
    this.player1 = new Player(1)
    this.player2 = new Player(2)

    this.startGame()
  }

  startGame () {
    let hands = this.deck.deal()
    let hand1 = hands[0]
    let hand2 = hands[1]

    hand1.forEach((card) => {
      this.player1.addCards(card)
    })

    hand2.forEach((card) => {
      this.player2.addCards(card)
    })
  }

  gameRound () {
    let player1Card = this.player1.playTopCard()
    let player2Card = this.player2.playTopCard()

    console.log(`
      Player 1 plays ${player1Card.name} of ${player1Card.suit}.
      Player 2 plays ${player2Card.name} of ${player1Card.suit}.
    `)

    if (player1Card.value === player2Card.value) {
      if (this.player1.hand.length === 0) {
        console.log('The last card has the same value. What are the odds!')
      } else {
        console.log('Same value! Reinsert your cards randomly')
        this.player1.reinsertCard(player1Card)
        this.player2.reinsertCard(player2Card)
      }
    } else if (player1Card.value === 1) {
      console.log('Player 1 gets a point!')
      this.player1.addPoints(1)
    } else if (player2Card.value === 1) {
      console.log('Player 2 gets a point!')
      this.player2.addPoints(1)
    } else if (player1Card.value > player2Card.value) {
      console.log('Player 1 gets a point!')
      this.player1.addPoints(1)
    } else if (player2Card.value > player1Card.value) {
      console.log('Player 2 gets a point!')
      this.player2.addPoints(1)
    }
  }
}

module.exports = Game
