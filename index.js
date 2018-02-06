var Hotel = require('./hotel')

var lakewood = new Hotel("Lakewood", 3, 110, 80, 90, 80)
var bridgewood = new Hotel("Bridgewood", 4, 160, 110, 60, 50)
var ridgewood = new Hotel("Ridgewood", 5, 220, 100, 150, 40)
var allHotels = [lakewood, bridgewood, ridgewood]

function formatData(input) {
  var formattedInput = {
    user: '',
    dates: []
  }

  formattedInput.user = input.split(': ')[0]

  var dates = input.split(': ')[1].split(', ')

  for(var i = 0; i < dates.length; i++) {
    dates[i] = dates[i].split('(')[0].split('')
    dates[i].splice(2, 0, ' ')
    dates[i].splice(dates[i].length-4, 0, ' ')
    formattedInput.dates.push(dates[i].join(''))
  }
  return formattedInput
}

function checkDate(dates) {
  var getDays = {
    wkdays: 0,
    wkends: 0
  }

  for (var i = 0; i < dates.length; i++) {
    var date = new Date(dates[i]).getDay()
    if (date === 0 || date === 6) {
      getDays.wkends++
    } else {
      getDays.wkdays++
    }
  }
  return getDays
}

function findCheapest(data) {
  data = formatData(data)
  var days = checkDate(data.dates)

  allHotels.sort(function(a,b) {
    return (a.totalPrice(data.user, days) === b.totalPrice(data.user, days)) ? (b.rating - a.rating) : a.totalPrice(data.user, days) - b.totalPrice(data.user, days)
  })

  return allHotels[0].name
}

module.exports = {
  formatData,
  checkDate,
  findCheapest
}
