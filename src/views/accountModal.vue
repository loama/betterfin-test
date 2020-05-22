<template>
  <div id="accountModal" v-bind:class="{active: active}">
    <h2>Account Modal</h2>
  </div>
</template>

<script>
export default {
  computed: {
    active () {
      return this.$route.query.modal === 'account'
    }
  }
}
</script>

<style lang="sass" scoped>
#accountModal
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
</style>
