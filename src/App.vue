<template>
  <div id="app">
    <div id="navbar">
      <img class="logo" src="./assets/logo.svg">
    </div>

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
html, body
  margin: 0
  padding: 0
  // COLORS
  --primary: #F66652
  --primary-interacted: rgba(240, 102, 82, 90)
  --primary-lightened: rgba(240, 102, 82, 33)
  --secondary: #537871
  --secondary-interacted: rgba(83, 120, 113, 90)
  --secondary-lightened: rgba(83, 120, 113, 33)
  --stroke: #DFDAD8
  --stroke-light: rgba(223, 218, 216, 90)
  --stroke-darkened: rgba(83, 120, 113, 33)
  --text-dark: #2C3340
  --success: #A7C958
  --white: #FFF
  --almost-white: #FAF9F7

#app
  color: var(--text-dark)
  padding-top: 56px

  #navbar
    background: #FFF
    box-shadow: 1px 0 10px #596273
    height: 48px
    left: 0
    position: fixed
    top: 0
    width: 100vw

    .logo
      display: block
      margin: 12px auto
      width: 104px
</style>
