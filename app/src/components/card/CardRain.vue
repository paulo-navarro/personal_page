<template>
  <section class="card">
    <h1 class="title">
      Paulo Navarro
    </h1>
    <figure class="photo">
      <img src="@/assets/images/me3.gif"/>
    </figure>
    <div class="description">
      I'm a software developer with a taste for frontend and also for
      <select-theme/>
    </div>
    <card-links/>
  </section>
</template>

<script>
  import CardLinks   from "./CardLinks.vue";
  import SelectTheme from "../SelectTheme.vue";

  export default {
    name: 'Card',

    components: {
      CardLinks,
      SelectTheme
    },

    data() {
      return {}
    }
  }
</script>

<style scoped>
  .card {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-width: 600px;
    margin: 0 20px;
    padding: 20px;
    font-size: 18px;
    font-family: Verdana,Geneva,sans-serif; 
    color: #fff;
    background-color: #111;
    box-shadow: 0 2px 5px #000;
    border-radius: 5px;
  }

  .title {
    flex: 1 1 100%;
    padding: 0 0 20px;
    display: block;
    margin: 0;
    text-align: center;
  }

  .photo {
    flex: 0 0 100px;
    width: 100px;
    height: 100px;
    margin: 0px;
    text-align: center;
    background-color: #565656;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .photo img{
    width: 100%;
    margin-top: -25px;
  }

  .description {
    flex: 1 1 calc(100% - 160px);
    line-height: 25px;
    padding: 20px 30px;
  }
</style>
