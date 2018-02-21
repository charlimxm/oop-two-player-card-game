var assert = require('chai').assert
var Card = require('../card')

var card = new Card(1, 'A', 'Hearts')

describe('Testing constructor for Card', () => {
  it('should return an object for card', () => {
    assert.isObject(card)
  })

  it('should return a card value of 1', () => {
    assert.equal(card.value, 1)
  })

  it('should return a card name of A', () => {
    assert.equal(card.name, 'A')
  })

  it('should return a card suit of Hearts', () => {
    assert.equal(card.suit, 'Hearts')
  })
})
