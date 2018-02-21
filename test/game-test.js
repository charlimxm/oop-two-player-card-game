var assert = require('chai').assert
var Game = require('../game')

var game = new Game()

describe('Testing constructor for Game', () => {
  it('should return an object for Deck', () => {
    assert.isObject(game.deck)
  })

  it('should return an object for Player 1', () => {
    assert.isObject(game.player1)
  })

  it('should return an object for Player 2', () => {
    assert.isObject(game.player2)
  })
})

describe('Deal cards when game is initialised - startGame()', () => {
  it('deals players hands when game is initialised', () => {
    assert.equal(game.player1.hand.length, 26)
    assert.equal(game.player2.hand.length, 26)
  })
})

describe('Running of game - gameRound()', () => {
  it('recognises cards of the same value and reinserts them', () => {
    let game1 = new Game()
    game1.player1.hand = [{value: 3, name: '3', suit: 'Diamonds'}, {value: 13, name: 'K', suit: 'Clubs'}]
    game1.player2.hand = [{value: 11, name: 'J', suit: 'Spades'}, {value: 13, name: 'K', suit: 'Hearts'}]
    game1.gameRound()
    assert.equal(game1.player1.hand.length, 2)
    assert.equal(game1.player2.hand.length, 2)
  })

  it('recognises cards of the same value and does not increment points', () => {
    let game1 = new Game()
    game1.player1.hand = [{value: 13, name: 'K', suit: 'Clubs'}]
    game1.player2.hand = [{value: 13, name: 'K', suit: 'Hearts'}]
    game1.gameRound()
    assert.equal(game1.player1.points, 0)
    assert.equal(game1.player2.points, 0)
  })

  it('recognises A as the biggest card', () => {
    let game2 = new Game()
    game2.player1.hand = [{value: 1, name: 'A', suit: 'Clubs'}]
    game2.player2.hand = [{value: 13, name: 'K', suit: 'Hearts'}]
    game2.gameRound()
    assert.equal(game2.player1.points, 1)
    assert.equal(game2.player2.points, 0)
  })

  it('correctly compares cards and returns the winner', () => {
    let game3 = new Game()
    game3.player1.hand = [{value: 3, name: '3', suit: 'Diamonds'}]
    game3.player2.hand = [{value: 11, name: 'J', suit: 'Spades'}]
    game3.gameRound()
    assert.equal(game3.player1.points, 0)
    assert.equal(game3.player2.points, 1)
  })
})
