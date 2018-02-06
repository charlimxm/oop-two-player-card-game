class Hotel {
  constructor(name, rating, weekdayRegular, weekdayRewards, weekendRegular, weekendRewards) {
    this.name = name;
    this.rating = rating;
    this.weekdayRegular = weekdayRegular;
    this.weekdayRewards = weekdayRewards;
    this.weekendRegular = weekendRegular;
    this.weekendRewards = weekendRewards;
  }

  totalPrice(user, dates) {
    var pricing;
    var weekdayRates;
    var weekendRates;
    if(user == "Regular") {
      weekdayRates = this.weekdayRegular
      weekendRates = this.weekendRegular
    } else {
      weekdayRates = this.weekdayRewards
      weekendRates = this.weekendRewards
    }
    pricing = (dates.weekdays * weekdayRates) + (dates.weekends * weekendRates)
    return pricing
  }
}

module.exports = Hotel
