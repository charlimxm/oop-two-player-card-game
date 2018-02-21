var assert = require('chai').assert
var Player = require('../player')

var player = new Player(1)

describe('Testing constructor for Player', () => {
  it('should return an object for player', () => {
    assert.isObject(player)
  })

  it('should return a player id of 1', () => {
    assert.equal(player.id, 1)
  })

  it('should return 0 cards on hand', () => {
    assert.equal(player.hand.length, 0)
  })

  it('should return an initial point of 0', () => {
    assert.equal(player.points, 0)
  })
})

var player1 = new Player(1)

describe('Add cards to hand - addCards()', () => {

  player1.addCards({value: 1, name: 'A', suit: 'Hearts'})
  player1.addCards({value: 2, name: '2', suit: 'Hearts'})
  player1.addCards({value: 4, name: '4', suit: 'Hearts'})
  player1.addCards({value: 11, name: 'J', suit: 'Hearts'})

  it('should return a hand length of 4', () => {
    assert.equal(player1.hand.length, 4)
  })
})

var player2 = new Player(1)

describe('Play top card on hand - playTopCard()', () => {

  player1.addCards({value: 4, name: '4', suit: 'Hearts'})
  player1.addCards({value: 11, name: 'J', suit: 'Hearts'})
  var top1Card = player1.playTopCard()
  var top2Card = player1.playTopCard()

  it('should return a card name of 4', () => {
    assert.equal(top1Card.name, 'J')
  })

  it('should return a card name of A', () => {
    assert.equal(top2Card.name, '4')
  })

  it('should return a card suit of Hearts', () => {
    assert.equal(top1Card.suit, 'Hearts')
  })
})

var player3 = new Player(1)

describe('Reinsert card randomly to hand - reinsertCard()', () => {

  player3.reinsertCard({value: 11, name: 'J', suit: 'Hearts'})

  it('should return a hand length of 3', () => {
    assert.equal(player3.hand.length, 1)
  })
})

describe('Add points to total - addPoints()', () => {

  player1.addPoints(4)

  it('should return a total points of 4', () => {
    assert.equal(player1.points, 4)
  })
})
