<template>
  <h1>Categories</h1>
  <ul id="cat_links">
    <li><a href="#clothings">Clothings</a></li>
    <li><a href="#electronics">Electronics</a></li>
    <li><a href="#foods">Foods</a></li>
  </ul>
  <div id="categories">
    <div class="category">
      <h1>Electronics</h1>
      <div class="products" id="electronics">
        <div class="product">
          <img src="../assets/categories/electronics/photo-1505740420928-5e560c06d30e.jpeg" alt="headphones on yellow background">
          <p>Price: $5</p>
          <p>Posted By: adipisicing</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
        <div class="product">
          <img src="../assets/categories/electronics/photo-1548378329-437e1ef34263.jpeg" alt="black headphones">
          <p>Price: $5</p>
          <p>Posted By: adipisicing</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
        <div class="product">
          <img src="../assets/categories/electronics/photo-1565335020653-1d1c4fc20bbc.jpeg" alt="Tv">
          <p>Price: $5</p>
          <p>Posted By: adipisicing</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
        <div class="product">
          <img src="../assets/categories/electronics/photo-1593642632823-8f785ba67e45.jpeg" alt="Laptop ">
          <p>Price: $5</p>
          <p>Posted By: adipisicing</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
      </div>
    </div>
    <div class="category">
      <h1>Clothings</h1>
      <div class="products" id="clothings">
        <div class="product">
          <img src="../assets/categories/clothings/photo-1551107696-a4b0c5a0d9a2.jpeg" alt="Pink shoe">
          <p>Price: $5</p>
          <p>Posted By: ipsum</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
        <div class="product">
          <img src="../assets/categories/clothings/photo-1561613441-a21266ca81fa.jpeg" alt="Orange shoes">
          <p>Price: $5</p>
          <p>Posted By: ipsum</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
        <div class="product">
          <img src="../assets/categories/clothings/photo-1565127453543-ad97bbbba30d.jpeg" alt="Denims">
          <p>Price: $5</p>
          <p>Posted By: ipsum</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
        <div class="product">
          <img src="../assets/categories/clothings/photo-1574660082367-ae7c10fe66d3.jpeg" alt="Caps">
          <p>Price: $5</p>
          <p>Posted By: ipsum</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
      </div>
    </div>
    <div class="category">
      <h1>Foods</h1>
      <div class="products" id="foods">
        <div class="product">
          <img src="../assets/categories/foods/photo-1467003909585-2f8a72700288.jpeg" alt="">
          <p>Price: $5</p>
          <p>Posted By: lorem</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
        <div class="product">
          <img src="../assets/categories/foods/photo-1476224203421-9ac39bcb3327.jpeg" alt="">
          <p>Price: $5</p>
          <p>Posted By: lorem</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
        <div class="product">
          <img src="../assets/categories/foods/photo-1482049016688-2d3e1b311543.jpeg" alt="">
          <p>Price: $5</p>
          <p>Posted By: lorem</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
        <div class="product">
          <img src="../assets/categories/foods/photo-1498837167922-ddd27525d352.jpeg" alt="">
          <p>Price: $5</p>
          <p>Posted By: lorem</p>
          <a href="#" class="add_to_cart" @click.prevent="toggleReview">Add to cart</a>
        </div>
      </div>
    </div>
    <a href="#" id="more" @click.prevent>See more</a>
  </div>
</template>

<script>
export default {
  mounted () {
    const links = document.querySelectorAll('#cat_links a')
    links.forEach((li, e) => {
      li.onclick = e.preventDefault()
    })
    if (this.$route.hash.trim() !== '') {
      this.$nextTick(() => {
        const el = document.querySelector(this.$route.hash)
        if (el !== null || undefined) {
          el && el.scrollIntoView()
        }
      })
    }
  }
}
</script>

<style lang='scss'>
ul {
  text-align: left;
li{
  padding: 0.3rem;
  a{
    padding: 0.3rem;
    color: #282828;
    text-decoration: underline;
  }
}
}
.products{
.product{
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid grey;
  img{
    width: 100vw;
    height: 250px;
    object-fit: cover;
  }
  p{
    padding-left: 8px;
    padding-top: 8px;
  }
  .add_to_cart{
    align-self: center;
  }
}
}
@media(min-width: 550px){
  .products{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1rem;
    max-width: 1400px;
    .product{
      flex: 40%;
      img{
        width: 98%;
      }
    }
  }
}
</style>
