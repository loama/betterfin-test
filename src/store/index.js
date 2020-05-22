import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accounts: {},
    balances: [],
    trxs: {},
    trxs_results: [],
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
    },
    search (state, query) {
      query = query.toLowerCase()

      const transactions = Object.values(state.trxs.transaction)
      const results = []
      for (let i = 0; i < transactions.length; i++) {
        let inMerchant = false
        if (transactions[i].merchant && transactions[i].merchant.name) {
          inMerchant = transactions[i].merchant.name.toLowerCase().includes(query)
        }

        const inDescription = transactions[i].description.simple.toLowerCase().includes(query)
        const inType = transactions[i].type.replace('_', '').toLowerCase().includes(query)

        if (inMerchant || inDescription || inType) {
          results.push(transactions[i])
        }
      }

      state.trxs_results = results
    }
  },
  actions: {
  },
  modules: {
  }
})
