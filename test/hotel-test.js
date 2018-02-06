var assert = require('chai').assert
var Hotel = require('../hotel')

var lakewood = new Hotel("Lakewood", 3, 110, 80, 90, 80)

describe("Testing constructor for Hotel", function() {
  it("should return an object for Lakewood", function() {
    assert.isObject(lakewood)
  })

  it("should return a rating of 3 for Lakewood", function() {
    assert.equal(lakewood.rating, 3)
  })

  it("should return a weekday rate of $110 for Lakewood's regular customer", function() {
    assert.equal(lakewood.wkdayRegular, 110)
  })

  it("should return a weekday rate of $80 for Lakewood's rewards customer", function() {
    assert.equal(lakewood.wkdayRewards, 80)
  })

  it("should return a weekend rate of $90 for Lakewood's regular customer", function() {
    assert.equal(lakewood.wkendRegular, 90)
  })

  it("should return a weekend rate of $80 for Lakewood's rewards customer", function() {
    assert.equal(lakewood.wkendRewards, 80)
  })
})

describe("Check total price of booking - totalPrice(user, dates)", function() {
  it("should return $330 for 3 weekdays in Lakewood for Regular customer", function() {
    assert.equal(lakewood.totalPrice("Regular", {wkdays: 3, wkends: 0}), 330)
  })

  it("should return $240 for 2 weekdays and 1 weekend in Lakewood for Rewards customer", function() {
    assert.equal(lakewood.totalPrice("Rewards", {wkdays: 2, wkends: 1}), 240)
  })
})
