// https://github.com/matteocontrini/comuni-json
import dbCities from '@root/data/db-comuni.json'

var dovelobutto = {

  getCities: function () {
    let cities = []
    cities = dbCities.map(city => {
      return (({ nome, cap }) => ({ nome, cap }))(city)
    })

    return cities
  }
}

export default dovelobutto

// (function () {})()
