<template>
  <div id="transactionsTable">
    <div class="head">
      <div class="merchant">Merchant</div>
    </div>

    <ul>
      <li v-for="transaction in transactions"
          v-bind:key="transaction.id">
          <div class="id">{{transaction.id}}</div>
          <div class="amount">${{transaction.amount.amount.toFixed(2)}}</div>
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
  margin-left: 12px
  max-width: calc(100vw - 24px)
  overflow-x: scroll

  .head
    background: var(--almost-white)
    border-top: 1px solid var(--stroke)
    border-bottom: 1px solid var(--stroke)
    height: 44px
    left: 12px
    position: fixed
    width: calc(100vw - 24px)

    > div
      border-left: 1px solid var(--stroke)
      height: 44px
      line-height: 44px
      padding: 0 8px

      &:last-child
        border-right: 1px solid var(--stroke)

  ul
    list-style: none
    margin: 0
    padding: 0

    li
      border-bottom: 1px solid var(--stroke)

      > div
        border-left: 1px solid var(--stroke)
        display: inline-block
        height: 44px
        line-height: 44px
        padding: 0 8px
        text-align: center

        &:last-child
          border-right: 1px solid var(--stroke)

        &.amount
          text-align: right
          width: 80px

@media (min-width: 1024px)
  #transactionsTable
    max-width: calc(100vw - 236px)

    .head
      width: calc(100vw - 236px)
</style>
