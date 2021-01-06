<template>
  <div id="menu-bar">
    <img src="./assets/hamburger.svg" id="menu" alt="Menu" @click="toggleMenu"/>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/support">Support</router-link>
    </nav>
    <img id="cart" src="./assets/cart.png" alt="cart" />
  </div>
  <Menu :showMenu=showMenu v-if="showMenu" @update-show="toggleMenu"/>
  <div id="view_area">
    <router-view />
  </div>
  <footer>
    <div id="quick_links">
      <a href="/about">About</a> |
      <a href="support">Support</a> |
      <a href="/pricing">Pricing</a>
      <br>
      <a href="/home">Home</a> |
      <a href="/report">Report</a> |
      <a href="/categories">Categories</a>
    </div>
    <p>Demo by <a href="https://thatcoul.netlify.app">Luteya Coulston</a></p>
  </footer>
</template>
<script>
import Menu from './components/Menu'
export default {
  components: {
    Menu
  },
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    /**
     * Toggles the display of the side menu
     */
    toggleMenu () {
      this.showMenu = !this.showMenu
      return this.showMenu
    }
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#cart {
  width: 30px;
  padding-top: 0.4rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#menu-bar {
  height: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;

  #menu {
    height: 20px;
  }
  #menu:hover{
      cursor:pointer;
  }

  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    font-size: 0.8rem;
    padding: 0.8rem;

    &.router-link-exact-active {
      border-bottom: 4px solid yellow;
    }
  }
}
footer {
  color: #000;
  background-color: yellow;
  font-weight: bold;
  margin-top:4px;
  a {
    text-decoration: none;
    color: 000;
  }
  p{
    padding: 1rem;
  }
  #quick_links{
    padding: 1rem;
    color: #ffffff;
    background-color: #000;
    a{
      color: #ffffff;
      font-weight: 500;
      padding: 4px;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
@media (min-width: 750px){
    #menu-bar{
      position: fixed;
      top: 0;
      width: 100%;
    }
    #view_area{
      margin-top: 48px;
    }
}
</style>
