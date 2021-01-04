<template>
  <div class="nav-wrapper" @click.prevent="hideMenu">
    <nav>
      <p>Hello There</p>
      <hr />
      <router-link to="/profile">Profile</router-link>
      <hr />
      <router-link to="/payment">Payment methods</router-link>
      <hr />
      <router-link to="/categories">Categories</router-link>
      <hr />
      <router-link to="/pricing">Pricing</router-link>
      <hr />
      <router-link to="/report">Report issue</router-link>
      <hr />
      <router-link to="/logout">Logout</router-link>
      <br>
      <p>Net shop</p>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    showMenu: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideMenu () {
      let menu = ''
      menu = !this.showMenu
      this.$emit('update-show', menu)
    }
  }
}
</script>

<style lang='scss' scoped>
p {
  text-align: center;
  padding: 0.5rem;
  font-weight: bold;
}
.nav-wrapper {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  top: 0;
}
nav {
  background-color: #fff;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  box-shadow: 0px 0px 8px #000;
   animation: 150ms linear nav;
  a {
    text-decoration: none;
    padding: 0.8rem;
    color: #282828;
    &:hover{
      background-color: #282828;
      color: #fff;
    }
  }
}
@keyframes nav {
  0%{
    transform: translateX(-40px);
  }
}
@media (min-width: 750px){
  .nav-wrapper{
    width: 200px;
    top: 48px;
    nav{
      width: 100%;
      box-shadow: 0px 0px 4px #000;
    }
  }
}
</style>
