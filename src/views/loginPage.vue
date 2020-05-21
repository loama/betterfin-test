<template>
  <div id="loginPage">
    <form id="loginForm">
      <img class="logo" src="../assets/logo.svg">
      <h2> Login to Betterfin </h2>

      <div class="input">
        <div class="placeholder"></div>
        <input type="email">
      </div>

      <div class="input">
        <div class="placeholder"></div>
        <input type="password">
      </div>

      <input type="submit" value="Login">
    </form>

    <div id="loginImage"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
#loginPage
  background: #FFF
  height: 100vh
  left: 0
  position: fixed
  top: 0
  width: 100vw
  z-index: 100

  #loginForm
    text-align: center
    width: 100vw

    .logo
      display: block
      margin: 54px auto 36px auto
      width: 104px

    h2
      margin-bottom: 48px

    .input
      position: relative

      .placeholder
        left: 0
        position: absolute
        top: 0

      input
        background: var(--almost-white)
        border: 1px solid var(--stroke)
        height: 48px
        margin-bottom: 20px
        outline: none
        width: 304px

        &:focus
          border: 1px solid var(--stroke-darkened)

    input[type="submit"]
      background: var(--primary)
      border: none
      color: var(--white)
      font-size: 16px
      height: 44px
      width: 304px

@media (min-width: 1024px)
  #loginPage
    #loginForm
      display: inline-block
      height: 100vh
      width: 50vw
      vertical-align: top

    #loginImage
      background: #CBE2E1
      height: 100vh
      display: inline-block
      width: 50vw
</style>
