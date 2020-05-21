import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: {},
    balances: [],
    trxs: {},
    trxs_count: {},
    // UI
    loginPage: {
      style: {
        display: 'block',
        opacity: 1
      }
    }
  },
  mutations: {
    login (state) {
      state.loginPage.style.opacity = 0
      setTimeout(() => {
        state.loginPage.style.display = 'none'
      }, 300)
    },
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
