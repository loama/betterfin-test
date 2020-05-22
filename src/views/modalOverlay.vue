<template>
  <div id="modalOverlay" v-bind:class="{show: show}" v-on:click="closeModal()"></div>
</template>

<script>
export default {
  computed: {
    show () {
      if (this.$route.query.modal !== undefined) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    closeModal () {
      this.$router.push({
        query: {
          view: this.$route.query.view,
          orderBy: this.$route.query.orderBy
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
#modalOverlay
  background: var(--text-dark)
  height: 100vh
  left: 0
  opacity: 0
  pointer-events: none
  position: fixed
  top: 0
  transition: all 0.3s
  width: 100vw
  z-index: 50

  &.show
    opacity: 0.8
    pointer-events: all
</style>
