<template>
  <div id="app">
    abcef

    {{accounts}}
    <transactions />
    <loginPage />
  </div>
</template>

<script>
import axios from 'axios'

import loginPage from './views/loginPage.vue'
import transactions from './views/transactions.vue'

export default {
  components: {
    loginPage: loginPage,
    transactions: transactions
  },
  computed: {
    accounts () {
      return this.$store.state.accounts
    }
  },
  mounted () {
    var self = this
    axios({
      method: 'get',
      url: '/data.json'
    })
      .then((response) => {
        self.$store.commit('saveJsonData', response.data)
      })
  }
}
</script>

<style lang="sass">
#app
</style>
