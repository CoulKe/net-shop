<template>
  <div id="report">
    <form v-if="!feedback">
      <label for="issue">What's the issue?</label> <br />
      <textarea name="issue" id="issue" cols="30" rows="10" v-model="input"></textarea> <br />
      <input type="submit" value="Submit" @click.prevent="clearText" />
    </form>
    <div id="feedback" v-if="feedback">
        <p>We shall get back to you soon.<strong>Sorry for any inconvenience.</strong></p> <br>
        <a id="home_link" href="/">Go back to <mark>net shop</mark> home</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      feedback: false
    }
  },
  methods: {
    clearText () {
      this.input = ''
      this.feedback = true
      setTimeout(() => {
        location.pathname = '/'
      }, 2500)
    }
  }
}
</script>

<style lang='scss' scoped>
#report{
    display: flex;
    justify-content: center;
    align-items: center;
}
form{
    box-shadow: 0px 0px 8px #282828;
    padding: 2rem;
    width: 300px;
    border-radius:8px;
}
label{
    display:inline-block;
    font-weight: bold;
    padding: 0.5rem;
}
input {
  color: yellow;
  background-color: #000;
  padding: 0.5rem;
  font-weight: bold;
  font-size: large;
  border: none;
  &:hover {
    cursor: pointer;
  }
}
textarea{
    border: 2px solid #000;
    padding: 4px;
}
#feedback {
    #portfolio{
        font-weight: bold;
        color: #000;
    }
    #home_link{
        color: #fff;
        background-color: #000;
        padding: 0.5rem;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        margin-top: 8px;
        mark {
            color: yellow;
            background-color: #000;
        }
    }
}
</style>
