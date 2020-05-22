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
    }
  }
}
</script>

<style lang="sass" scoped>
#filters
  background: var(--almost-white)

  .view
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

</style>
