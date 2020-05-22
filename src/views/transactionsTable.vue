<template>
  <div id="transactionsTable">
    <ul>
      <li class="head">
        <div class="merchant">Merchant</div>
        <div class="amount">Amount</div>
        <div class="currency">Currency</div>
        <div class="category">Category</div>
        <div class="description">Description</div>
        <div class="date">Date</div>
        <div class="type">Type</div>
      </li>

      <li v-for="transaction in transactions"
          v-bind:key="transaction.id">

          <div class="merchant">
            <span v-if="transaction.merchant">
              {{transaction.merchant.name}}.
            </span>
            <span v-else=""> - </span>
          </div>
          <div class="amount">${{transaction.amount.amount.toFixed(2)}}</div>
          <div class="currency">{{transaction.amount.currency}}</div>
          <div class="category">{{transaction.category}}</div>
          <div class="description">{{transaction.description.simple}}</div>

          <div class="date">
            {{transaction.createdDate.split('T')[0]}} {{transaction.createdDate.split('T')[1].split('Z')[0]}}
          </div>

          <div class="type">{{transaction.subType}}</div>
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
#transactionsTable
  border: 1px solid var(--stroke)
  margin-left: 12px
  max-width: calc(100vw - 24px)
  overflow-x: scroll

  .head
    background: var(--almost-white)
    height: 44px
    left: 12px

    > div
      border-left: 1px solid var(--stroke)
      height: 44px
      line-height: 44px
      padding: 0 8px

  ul
    list-style: none
    margin: 0
    max-height: calc(100vh - 146px)
    overflow-y: scroll
    padding: 0
    width: 1023px

    li
      border-bottom: 1px solid var(--stroke)

      &:last-child
        border-bottom: none

      &:hover
        background: var(--almost-white)
        cursor: pointer

      > div
        border-left: 1px solid var(--stroke)
        display: inline-block
        height: 44px
        line-height: 44px
        overflow: hidden
        padding: 0 8px
        text-align: center
        text-overflow: ellipsis
        vertical-align: top
        white-space: nowrap

        &:first-child
          border-left: none

        &.merchant
          text-align: left
          width: 120px

        &.amount
          text-align: right
          width: 80px

        &.currency
          text-align: right
          width: 64px

        &.category
          width: 120px

        &.description
          width: 200px

        &.date
          width: 200px

        &.type
          width: 120px

@media (min-width: 1024px)
  #transactionsTable
    max-width: calc(100vw - 236px)
</style>
