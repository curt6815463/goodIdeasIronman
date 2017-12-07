<template>
  <div id="app">
    <div class="">
      好想工作室鐵人賽貼文狀態
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="~@/assets/logo.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="~@/assets/logo2.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="~@/assets/logo3.jpg" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    <router-view/>


    
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {

    }
  },
  mounted(){

  }
}
</script>

<style scoped>
.carousel-item img{
  max-height: 40vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
