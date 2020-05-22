<template>
  <div id="transactionsList">
    <ul>
      <li v-for="transaction in transactions" v-bind:key="transaction.id">
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    transactions () {
      return this.$store.state.trxs_results
    }
  }
}
</script>

<style lang="sass" scoped>
#transactionsList
  ul
    height: calc(100vh - 136px)
    list-style: none
    margin: 0 auto
    max-width: 100vw
    overflow-y: scroll
    padding: 0
    width: 500px

    li
      height: 80px
      position: relative

      &:hover
        background: var(--almost-white)
        cursor: pointer

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
</style>
