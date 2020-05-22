<template>
  <div id="app">
    <div id="navbar">
      <img class="settings" src="./assets/settings.svg" v-on:click="openModal('settings')">
      <img class="logo" src="./assets/logo.svg">
      <img class="account" src="./assets/userpiclogo.png" v-on:click="openModal('account')">
    </div>

    <div id="topbar">
      <input class="search" v-model="searchQuery" v-on:keyup="search()" placeholder="Search ...">
      <div class="filters-button" v-on:click="toggleFilters()">
        <img src="./assets/filter.svg">
      </div>
      <filters v-bind:class="{open: filtersOpen}"/>
    </div>

    <transactionsList v-show="view === 'list'"/>
    <transactionsTable v-show="view === 'table'"/>

    <loginPage />

    <modalOverlay />

    <accountModal />
    <settingsModal />
    <transactionModal />
  </div>
</template>

<script>
import axios from 'axios'

import accountModal from './views/accountModal.vue'
import filters from './views/filters.vue'
import loginPage from './views/loginPage.vue'
import modalOverlay from './views/modalOverlay.vue'
import settingsModal from './views/settingsModal.vue'
import transactionsList from './views/transactionsList.vue'
import transactionModal from './views/transactionModal.vue'
import transactionsTable from './views/transactionsTable.vue'

export default {
  components: {
    accountModal: accountModal,
    filters: filters,
    loginPage: loginPage,
    modalOverlay: modalOverlay,
    settingsModal: settingsModal,
    transactionsList: transactionsList,
    transactionModal: transactionModal,
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
      searchQuery: '',
      filtersOpen: false
    }
  },
  methods: {
    openModal (modal) {
      this.$router.push({
        query: {
          orderBy: this.$route.query.orderBy,
          view: this.$route.query.view,
          modal: modal
        }
      })
    },
    search () {
      this.$store.commit('search', this.searchQuery)
    },
    toggleFilters () {
      this.filtersOpen = !this.filtersOpen
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
        self.$store.commit('search', '')
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

    .account
      cursor: pointer
      position: absolute
      right: 12px
      top: 8px
      width: 40px

    .settings
      cursor: pointer
      left: 12px
      position: absolute
      top: 12px

  #topbar
    height: 44px
    margin-bottom: 16px
    margin-top: 16px
    position: relative
    width: 100vw

    input.search
      border: 1px solid var(--stroke)
      box-sizing: border-box
      height: 44px
      left: calc(50vw - 144px)
      outline: none
      padding: 8px
      position: absolute
      top: 0
      width: 288px

      &:focus
        border: 1px solid var(--stroke-darkened)

    .filters-button
      border: 1px solid var(--stroke)
      display: inline-block
      height: 44px
      position: absolute
      right: 12px
      top: 0
      width: 44px

      img
        margin: 12px 11px
        width: 24px

    #filters
      background: var(--white)
      min-height: 44px
      position: absolute
      right: -200px
      top: 60px
      transition: all 0.3s
      width: 200px
      z-index: 10

      &.open
        transform: translate3d(-212px, 0, 0)

@media (min-width: 1024px)
  #app
    #filters
      transform: translate3d(-212px, 0, 0)
</style>
