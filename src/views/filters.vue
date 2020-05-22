<template>
  <div id="filters">
    <div class="view">
      <div class="indicator" v-bind:class="view"></div>

      <div class="option"
           v-bind:class="{active: view === 'list'}"
           v-on:click="changeView('list')">list</div>

      <div class="option"
           v-bind:class="{active: view === 'table'}"
           v-on:click="changeView('table')">table</div>
    </div>

    <div class="order">
      <div class="title"> Order By </div>

      <div class="option"
           v-bind:class="{active: orderBy === 'merchant'}"
           v-on:click="orderByOption('merchant')">
        <div class="radio"></div>
        merchant
      </div>

      <div class="option"
           v-bind:class="{active: orderBy === 'amount'}"
           v-on:click="orderByOption('amount')">
        <div class="radio"></div>
        amount
      </div>

      <div class="option"
           v-bind:class="{active: orderBy === 'category'}"
           v-on:click="orderByOption('category')">
        <div class="radio"></div>
        category
      </div>

      <div class="option"
           v-bind:class="{active: orderBy === 'description'}"
           v-on:click="orderByOption('description')">
        <div class="radio"></div>
        description
      </div>

      <div class="option"
           v-bind:class="{active: orderBy === 'date'}"
           v-on:click="orderByOption('date')">
        <div class="radio"></div>
        date
      </div>
    </div>

    <div class="export">
      <div class="title">Export</div>
      <div class="csv">CSV</div>
      <div class="json">JSON</div>
      <div class="pdf">PDF</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    view () {
      return this.$route.query.view
    }
  },
  data () {
    return {
      orderBy: 'date'
    }
  },
  methods: {
    changeView (view) {
      if (this.view !== view) {
        this.$router.push({
          query: {
            view: view
          }
        })
      }
    },
    orderByOption (option) {
      this.orderBy = option
      var currentQuery = this.$route.query

      this.$router.push({
        query: {
          orderBy: option,
          view: currentQuery.view
        }
      })
    }
  },
  mounted () {
    if (this.$route.query.view === undefined) {
      this.changeView('list')
    }
  }
}
</script>

<style lang="sass" scoped>
#filters

  .view
    background: var(--almost-white)
    border: 1px solid var(--stroke)
    border-radius: 2px
    height: 44px
    width: 100%

    .indicator
      background: var(--white)
      border: 1px solid var(--stroke)
      border-radius: 2px
      height: 44px
      left: 0
      pointer-events: none
      position: absolute
      top: 0
      transition: all 0.3s
      width: 100px
      z-index: 0

      &.table
        transform: translate3d(100px, 0, 0)

    .option
      cursor: pointer
      display: inline-block
      height: 44px
      line-height: 44px
      position: relative
      text-align: center
      width: 50%
      z-index: 2

  .order
    border: 1px solid var(--stroke)
    margin-top: 16px

    .title
      padding: 8px

    .option
      cursor: pointer
      height: 44px
      line-height: 44px
      padding: 0 8px

      .radio
        border: 1px solid var(--stroke)
        border-radius: 50%
        display: inline-block
        height: 12px
        margin-right: 8px
        margin-top: 16px
        vertical-align: top
        width: 12px

      &.active
        .radio
          background: var(--primary)

  .export
    border: 1px solid var(--stroke)
    margin-top: 12px

    .title
      padding: 8px

    .pdf, .json, .csv
      border: 1px solid var(--stroke)
      cursor: pointer
      height: 32px
      line-height: 32px
      margin: 4px 12px
      padding: 0 12px
      width: calc(100% - 48px)

      &:hover
        background: var(--primary)
        color: #FFF

</style>
