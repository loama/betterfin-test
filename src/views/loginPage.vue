<template>
  <div id="loginPage" v-bind:style="loginPageStyle">
    <form id="loginForm" v-on:submit.prevent="show2FA()">
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

      <div class="twoFactor" v-bind:style="{
          display: twoFactor.styles.display,
          opacity: twoFactor.styles.opacity
        }">
        <h2> Enter the code you received</h2>
        <h4>We sent you a SMS with a code</h4>

        <div class="code" v-on:click="focusCode()">
          <input id="codeInput"
                 type="number"
                 v-model="twoFactor.code"
                 v-on:keyup="checkCode()">

          <div class="number"
               v-bind:class="{
                 active: twoFactor.code.split('').length === 0,
                 filled: twoFactor.code.split('').length > 0
               }">
            {{twoFactor.code.split('')[0]}}
          </div>

          <div class="number"
               v-bind:class="{
                 active: twoFactor.code.split('').length === 1,
                 filled: twoFactor.code.split('').length > 1
               }">
               {{twoFactor.code.split('')[1]}}
          </div>

          <div class="number"
               v-bind:class="{
                 active: twoFactor.code.split('').length === 2,
                 filled: twoFactor.code.split('').length > 2
               }">
            {{twoFactor.code.split('')[2]}}
          </div>

          <div class="number"
               v-bind:class="{
                 active: twoFactor.code.split('').length === 3,
                 filled: twoFactor.code.split('').length > 3
               }">
            {{twoFactor.code.split('')[3]}}
          </div>

          <div class="number"
               v-bind:class="{
                 active: twoFactor.code.split('').length === 4,
                 filled: twoFactor.code.split('').length > 4
               }">
            {{twoFactor.code.split('')[4]}}
          </div>

          <div class="number"
               v-bind:class="{
                 active: twoFactor.code.split('').length === 5,
                 filled: twoFactor.code.split('').length > 5
               }">
            {{twoFactor.code.split('')[5]}}
          </div>
        </div>
      </div>
    </form>

    <div id="loginImage">
      <h2>Small business deserves better.</h2>
      <h4>Log in to evaluate your lending options and secure the financing that best fits your business needs.</h4>
      <img src="../assets/login-image.png">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loginPageStyle () {
      return this.$store.state.loginPage.style
    }
  },
  data () {
    return {
      twoFactor: {
        code: '',
        styles: {
          display: 'none',
          opacity: 0
        }
      }
    }
  },
  methods: {
    checkCode () {
      if (this.twoFactor.code.split('').length > 5) {
        this.login()
      }
    },
    focusCode () {
      const input = document.getElementById('codeInput')
      input.focus()
    },
    login () {
      this.$store.commit('login')
    },
    show2FA () {
      this.twoFactor.styles.display = 'block'
      setTimeout(() => {
        this.twoFactor.styles.opacity = 1
        this.focusCode()
      }, 100)
    }
  }
}
</script>

<style lang="sass" scoped>
#loginPage
  background: #FFF
  height: 100vh
  left: 0
  position: fixed
  top: 0
  transition: all 0.3s
  width: 100vw
  z-index: 100

  #loginForm
    position: relative
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
        padding: 0 12px
        width: 280px

        &:focus
          border: 1px solid var(--stroke-darkened)

    input[type="submit"]
      background: var(--primary)
      border: none
      color: var(--white)
      cursor: pointer
      font-size: 16px
      height: 44px
      outline: none
      width: 308px

    .twoFactor
      background: var(--white)
      height: 500px
      left: 0
      position: absolute
      top: 0
      transition: all 0.3s
      width: 100%

      .code
        input
          opacity: 0
          pointer-events: none
          position: absolute

        .number
          border: 1px solid var(--stroke)
          border-radius: 2px
          display: inline-block
          font-size: 24px
          height: 44px
          line-height: 44px
          margin: 8px
          vertical-align: top
          width: 40px

          &.active
            border: 1px solid var(--secondary)

          &.filled
            background: var(--secondary)
            color: var(--white)

  #loginImage
    h2
      margin: 120px 10% 24px 10%

    h4
      margin: 0 10% 32px 10%

    img
      margin-left: 10%
      width: 80%

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
