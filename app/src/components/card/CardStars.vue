<template>

  <section class="card">
    <alien class="alien"/>
    <h1 class="title">
      Paulo Navarro
    </h1>
    <figure class="photo">
      <img src="@/assets/images/me3.gif"/>
    </figure>
    <div class="description">
      I'm a software developer with a taste for frontend.<br>
      I'm also a lot of other things...
    </div>
    <div class="links">
      <a href="https://www.redbubble.com/people/paulonavarro/shop">PRODUCTS</a>
      <a href="https://www.linkedin.com/in/paulo-navarro-271a8b25/">LINKEDIN</a>
    </div>
  </section>
</template>

<script>

import alien from "../Alien.vue";

export default {
  name: 'Card',
  components: {
    alien,
  },

  data() {
    return {}
  }
}
</script>

<style scoped>
  .card {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    font-family: Verdana,Geneva,sans-serif; 
    color: #fff;
    background-color: #111;
    box-shadow: 0 2px 5px #000;
    border-radius: 5px;
  }
  
  .alien {
    position: absolute;
    top: -103px;
    right: 0;
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
    padding: 20px 30px;
  }

  .links {
    display: flex;
    flex: 1 1 100%;
    margin: 20px 0 0;
    padding: 20px;
  }

  .links a {
    color: #fff;
    flex: 1 1 auto;
    text-align: center;
    text-decoration: none;
  }
</style>
