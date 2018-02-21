var assert = require('chai').assert
var Deck = require('../deck')

var deck = new Deck()

describe('Testing constructor for Deck', () => {
  it('should return an object for Deck', () => {
    assert.isObject(deck)
  })

  it('should return a deck length of 52 (excluding 2 jokers)', () => {
    assert.equal(deck.cards.length, 52)
  })
})

describe('Distributing equal number of cards to each player - deal()', () => {

  var dealtHands = deck.deal()

  it('should return an Array for deck.deal()', () => {
    assert.isArray(dealtHands)
  })

  it('should return a hands length of 2', () => {
    assert.equal(dealtHands.length, 2)
  })

  it('should return a length of 26 for each hand', () => {
    assert.equal(dealtHands[0].length, 26)
    assert.equal(dealtHands[1].length, 26)
  })
})
