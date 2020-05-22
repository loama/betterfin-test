<template>
  <div id="transactionsList">
    <ul>
      <li v-for="transaction in transactions" v-bind:key="transaction.id">
        <div v-bind:style="{
            backgroundImage: ''
          }"></div>
        {{transaction.id}}
        {{transaction.amount.amount}} {{transaction.amount.currency}}
        {{transaction.baseType}}
        {{transaction.categoryType}}
        {{transaction.category}}
        {{transaction.createdDate}}
        {{transaction.description.simple}}
        {{transaction.type}}
        <div v-if="transaction.merchant">
          {{transaction.merchant.name}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    transactions () {
      return this.$store.state.trxs.transaction
    }
  }
}
</script>

<style lang="sass" scoped>
#transactionsList
  ul
    list-style: none
    margin: 0 auto
    max-width: 100vw
    padding: 0
    width: 500px

    li
      height: 80px
</style>
