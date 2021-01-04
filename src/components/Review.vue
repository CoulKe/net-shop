<template>
<div id="review_wrapper" @click.self="closeReview">
    <div id="product_review">
        <button @click="closeReview">&times;</button>
    <img :src="img" alt="Product"> <br>
    <label for="quantity">Quantity: </label>
    <input type="number" name="quantity" value="1" min="1" id="quantity">
    <h1>{{ desc }} Review</h1>
    <hr>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, tenetur officia nulla libero nemo obcaecati dolor aliquam atque impedit dolore velit omnis animi nesciunt dolorum neque ullam ea minus ipsam deleniti ratione aliquid totam sed. Rem expedita explicabo eaque? Quibusdam incidunt quos, cupiditate assumenda mollitia maxime non! Maiores, optio ullam!
    </p>
</div>
</div>
</template>

<script>
export default {
  name: 'Review',
  props: {
    desc: {
      type: String
    },
    img: {
      type: String
    },
    showReview: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeReview () {
      let showReview = ''
      showReview = !this.showReview
      this.$emit('update-show-review', showReview)
    }
  }
}
</script>

<style lang='scss' scoped>
#review_wrapper{
    width: 100vw;
    height:100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    #product_review{
        width: 250px;
        height: auto;
        background-color: #fff;
        padding: 0.5rem;
        text-align: left;
        button{
            text-align: right;
            background-color: transparent;
            border: none;
            font-weight: bold;
            font-size: 3rem;
            display: block;
            width: 100%;
            text-align: right;
            &:hover{
                cursor: pointer;
            }
            &:focus{
                border: none;
                outline: none;
            }
        }
        img{
            width: 100%;
            height: 100px;
            object-fit: cover;
        }
        h1{
            text-align: center;
        }
        p{
            padding-top: 8px;
        }
        label{
            font-weight: bold;
        }
    }
}
@media (min-width:550px){
  #product_review{
    width: 500px !important;
  }
}
</style>
