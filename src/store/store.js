import Vue from 'vue'
import Vuex from 'vuex'

// https://github.com/matteocontrini/comuni-json
import dbCities from '@root/data/db-comuni.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,

  state: {
    cities: []
  },

  actions: {
    getCities: function ({ commit, state }) {
      let citiesArr = []
      // let id = 0
      citiesArr = dbCities.map(city => {
        return (({ nome, cap }) => ({ nome, cap }))(city)
      })
      commit('setCities', citiesArr)
    }
  },

  mutations: {
    setCities: (state, cities) => {
      state.cities = cities
    }
  },

  getters: {
    // getCities: state => {
    // }
  }
})
