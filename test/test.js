var assert = require('chai').assert
var index = require('../index')

describe("Reformat User Input - formatData()", function () {
  it("should return an object for user input", function () {
    assert.isObject(index.formatData("Regular: 16Mar2009(mon), 17Mar2009(tue), 18Mar2009(wed)"))
  })

  it("should return customer type: regular", function () {
    assert.equal(index.formatData("Regular: 16Mar2009(mon), 17Mar2009(tue), 18Mar2009(wed)").user, "Regular")
  })

  it("should return customer type: rewards", function () {
    assert.equal(index.formatData("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)").user, "Rewards")
  })

  it("should return length of date as 3", function () {
    assert.equal(index.formatData("Regular: 16Mar2009(mon), 17Mar2009(tue), 18Mar2009(wed)").dates.length, 3)
  })

  it("should return first date as 16 Mar 2009", function () {
    assert.equal(index.formatData("Regular: 16Mar2009(mon), 17Mar2009(tue), 18Mar2009(wed)").dates[0], "16 Mar 2009")
  })
})


describe("Check User Input Date - checkDate()", function () {
  it("should return 3 weekdays", function () {
    assert.equal(index.checkDate(['16 Mar 2009', '17 Mar 2009', '18 Mar 2009']).wkdays, 3)
  })

  it("should return 1 weekday", function () {
    assert.equal(index.checkDate(['20 Mar 2009', '21 Mar 2009', '22 Mar 2009']).wkdays, 1)
  })

  it("should return 2 weekends", function () {
    assert.equal(index.checkDate(['20 Mar 2009', '21 Mar 2009', '22 Mar 2009']).wkends, 2)
  })
})


describe("Find the cheapest/ highest rated hotel - findCheapest()", function () {
  it("should return Lakewood as the cheapest/ highest rated hotel", function () {
    assert.equal(index.findCheapest("Regular: 16Mar2009(mon), 17Mar2009(tue), 18Mar2009(wed)"), "Lakewood")
  })

  it("should return Bridgewood as the cheapest/ highest rated hotel", function () {
    assert.equal(index.findCheapest("Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)"), "Bridgewood")
  })

  it("should return Ridgewood as the cheapest/ highest rated hotel", function () {
    assert.equal(index.findCheapest("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)"), "Ridgewood")
  })
})
