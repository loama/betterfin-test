<template>
  <div id="app">
    <div id="navbar">
      <img class="logo" src="./assets/logo.svg">
    </div>

    <div id="topbar">
      <input class="search" v-model="searchQuery" v-on:keyup="search()" placeholder="Search ...">
      <div class="filters-button"></div>
      <filters />
    </div>

    <transactionsList v-show="view === 'list'"/>
    <transactionsTable v-show="view === 'table'"/>

    <loginPage />
  </div>
</template>

<script>
import axios from 'axios'

import filters from './views/filters.vue'
import loginPage from './views/loginPage.vue'
import transactionsList from './views/transactionsList.vue'
import transactionsTable from './views/transactionsTable.vue'

export default {
  components: {
    filters: filters,
    loginPage: loginPage,
    transactionsList: transactionsList,
    transactionsTable: transactionsTable
  },
  computed: {
    accounts () {
      return this.$store.state.accounts
    },
    view () {
      return this.$route.query.view
    }
  },
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search () {
      this.$store.commit('search', this.searchQuery)
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
    box-shadow: 1px 0 10px 0 rgba(89,98,115,.2)
    height: 48px
    left: 0
    position: fixed
    top: 0
    width: 100vw
    z-index: 50

    .logo
      display: block
      margin: 12px auto
      width: 104px

  #topbar
    height: 44px
    margin-bottom: 16px
    margin-top: 16px
    position: relative
    width: 100vw

    input.search
      box-sizing: border-box
      height: 44px
      left: calc(50vw - 152px)
      outline: none
      padding: 8px
      position: absolute
      top: 0
      width: 288px

    .filters-button
      border: 1px solid var(--stroke)
      display: inline-block
      height: 44px
      position: absolute
      right: 12px
      top: 0
      width: 44px

    #filters
      min-height: 44px
      position: absolute
      right: 12px
      top: 60px
      width: 200px
</style>
