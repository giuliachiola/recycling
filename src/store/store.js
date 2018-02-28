import Vue from 'vue'
import Vuex from 'vuex'

// https://github.com/matteocontrini/comuni-json
import dbCities from '@root/data/db-comuni.json'
import dbDefault from '@root/data/db-default.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,

  state: {
    provinces: [],
    cities: [],
    garbage: [],
    bins: []
  },

  actions: {
    getProvinces: function ({ commit, state }) {
      let provincesArr = []
      provincesArr = dbCities.map((city) => {
        // fix json: se fa parte di una città metropolitana cm, nel json non è indicato il nome della provincia
        if (city.cm.nome === '') {
          return city.provincia
        } else {
          return {
            codice: city.provincia.codice,
            nome: city.cm.nome
          }
        }
      })

      // funziona ma perché ??
      const provincesArrUnique = provincesArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj['codice']).indexOf(obj['codice']) === pos
      })

      commit('setProvinces', provincesArrUnique)
    },

    getCities: function ({ commit, state }, provinceId) {
      let citiesArr = []
      citiesArr = dbCities.filter(city => city.provincia.codice === provinceId)

      citiesArr = citiesArr.map((city, index) => {
        city = (({ nome, cap, provincia }) => ({ nome, cap, provincia }))(city) // lasciare in italiano come nel JSON scaricato
        city['id'] = index
        return city
      })

      commit('setCities', citiesArr)
    },

    getGarbageDefault: function ({ commit, state }) {
      commit('setGarbage', dbDefault.garbage)
      commit('setBins', dbDefault.bins)
    }
  },

  mutations: {
    setProvinces: (state, provinces) => {
      state.provinces = provinces
    },

    setCities: (state, cities) => {
      state.cities = cities
    },

    setGarbage: (state, garbage) => {
      state.garbage = garbage
    },

    setBins: (state, bins) => {
      state.bins = bins
    }
  },

  getters: {
    // getCities: state => {
    // }
  }
})
