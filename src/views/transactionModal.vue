<template>
  <div id="transactionModal" v-bind:class="{active: active}">
    <div class="transaction" v-if="transaction !== {}">
      <div class="visual">
        <div v-if="transaction.merchant && transaction.merchant.name">
          <div class="image"
               v-bind:style="{
                 backgroundImage: 'url(img/merchants/' + transaction.merchant.name + '.png)'
               }">
          </div>
        </div>
        <div v-else>
          <div class="image"
               v-bind:style="{
                 backgroundImage: 'url(/img/merchants/empty.png)'
               }">
          </div>
        </div>

        <div class="transaction-type" v-bind:class="transaction.baseType">
          {{transaction.baseType}}
        </div>
      </div>

      <div class="content">
        <div class="title">
          {{transaction.description.simple}}
        </div>

        <div class="type">
          {{transaction.type.toLowerCase().replace('_', ' ')}}
        </div>

        <div class="amount" v-bind:class="{positive: transaction.categoryType === 'income'}">
          {{transaction.amount.amount.toFixed(2)}} {{transaction.amount.currency}}
        </div>

        <div class="date">
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '01'">Jan</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '02'">Feb</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '03'">Mar</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '04'">Apr</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '05'">May</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '06'">Jun</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '07'">Jul</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '08'">Aug</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '09'">Sep</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '10'">Oct</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '11'">Nov</span>
          <span v-if="transaction.createdDate.split('T')[0].split('-')[1] === '12'">Dec</span>

          {{parseInt(transaction.createdDate.split('T')[0].split('-')[2])}},

          {{transaction.createdDate.split('T')[1].split(':')[0]}}:{{transaction.createdDate.split('T')[1].split(':')[1]}}
        </div>
      </div>

      <div class="button contact">contact merchant</div>
      <div class="button zappier">zappier integration</div>
      <div class="button block">block merchant</div>
      <div class="button unsubscribe">unsubscribe</div>
      <div class="button chargeBack">charge back</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    active () {
      return this.$route.query.modal === 'transaction'
    },
    transaction () {
      let transaction
      for (var i = 0; i < this.$store.state.trxs_results.length; i++) {
        if (this.$store.state.trxs_results[i].id === this.$route.query.id) {
          transaction = this.$store.state.trxs_results[i]
          if (transaction.merchant === undefined) {
            transaction.merchant = {
              name: '-'
            }
          }
          return transaction
        }
      }
      return {
        merchant: {
          name: ''
        },
        description: {
          simple: ''
        },
        type: '',
        categoryType: '',
        amount: {
          amount: 0,
          currency: ''
        },
        createdDate: 'TZ'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#transactionModal
  background: var(--white)
  border-radius: 2px
  height: 400px
  left: calc(50vw - 200px)
  position: fixed
  top: 100vh
  transition: all 0.3s
  width: 400px
  z-index: 51

  &.active
    transform: translate3d(0, calc(-90vh), 0)

  .visual
    display: inline-block
    height: 80px
    position: relative
    width: 80px

    .image
      background-position: center
      background-repeat: no-repeat
      background-size: contain
      height: 40px
      margin: 20px 12px
      width: 56px

    .transaction-type
      background: var(--secondary)
      border-radius: 4px
      color: #FFF
      font-size: 12px
      padding: 4px
      position: absolute
      right: 4px
      top: 50px

      &.CREDIT
        background: var(--primary)

  .content
    display: inline-block
    vertical-align: top
    width: calc(100% - 80px)

    .title
      font-size: 16px
      margin-top: 24px
      overflow: hidden
      text-overflow: ellipsis
      width: calc(100% - 96px)
      white-space: nowrap

    .amount
      position: absolute
      right: 12px
      top: 24px

    .type
      text-transform: capitalize

    .date
      position: absolute
      right: 12px
      top: 40px

  .button
    border: 1px solid var(--stroke)
    cursor: pointer
    height: 44px
    line-height: 44px
    margin: 8px
    text-align: center
    width: calc(100% - 16px)

    &.contact
      color: var(--primary)

    &.zappier
      background: var(--primary)
      color: var(--white)

    &.block
      color: red

    &.chargeBack
      color: purple
</style>
