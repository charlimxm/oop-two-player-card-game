class Hotel {
  constructor(name, rating, wkdayRegular, wkdayRewards, wkendRegular, wkendRewards) {
    this.name = name;
    this.rating = rating;
    this.wkdayRegular = wkdayRegular;
    this.wkdayRewards = wkdayRewards;
    this.wkendRegular = wkendRegular;
    this.wkendRewards = wkendRewards;
  }

  totalPrice (user, dates) {
    var pricing
    var wkdayRates
    var wkendRates
    if (user === 'Regular') {
      wkdayRates = this.wkdayRegular
      wkendRates = this.wkendRegular
    } else {
      wkdayRates = this.wkdayRewards
      wkendRates = this.wkendRewards
    }
    pricing = (dates.wkdays * wkdayRates) + (dates.wkends * wkendRates)
    return pricing
  }
}

module.exports = Hotel
