import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: {},
    balances: [],
    trxs: {},
    trxs_count: {}
  },
  mutations: {
    saveJsonData (state, payload) {
      state.accounts = payload.accounts
      state.balances = payload.balances
      state.trxs = payload.trxs
      state.trxs_count = payload.trxs_count
    }
  },
  actions: {
  },
  modules: {
  }
})
