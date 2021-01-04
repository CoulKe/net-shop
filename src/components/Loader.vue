<template>
  <div id="loader">
    <div id="load_animated"></div>
  <p>Loading..</p>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang='scss'>
#loader{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    padding: 1rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
}
#load_animated{
    font-weight: bold;
    border: 16px solid rgb(228, 228, 228);
    border-right: 16px solid yellow;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: 1000ms linear loader infinite;
}
@keyframes loader{
    0% {
        transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
}
</style>
