<template>
  <div id="overview">
    <p>Balance: <strong>$1200</strong></p>
    <ul>
      <li>Orders</li>
      <li>Reviews</li>
      <li>Coupon</li>
      <li>View details</li>
      <li>Search history</li>
      <li>Logout</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
#overview{
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 80%;
  max-width: 300px !important;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0px 0px 4px #111;
  p{
    padding: 1rem;
    padding-left: 0.6rem;
  }
  ul{
    list-style-type: none;
    li{
      padding: 0.6rem;
      border-bottom: 1px solid grey;
      &:last-child{
        border: none;
      }
      &:hover{
        cursor: pointer;
        color: #fff;
        background-color: #282828;
      }
    }
  }
}
</style>
