<template>

  <section class="card">
    <alien class="alien"/>
    <h1 class="title">
      Paulo Navarro
    </h1>
    <div class="description">
      I'm a software developer with a taste for frontend.
    </div>
    <card-links/>
  </section>
</template>

<script>

  import alien       from "../Alien.vue";
  import CardLinks   from "./CardLinks.vue";

export default {
  name: 'Card',

  components: {
    alien,
    CardLinks
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
    max-width: 400px;
    margin: 0 20px;
    padding: 20px;
    font-size: 18px;
    font-family: Verdana,Geneva,sans-serif;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: -1px 1px 5px 1px #d522ab, 1px -1px 5px 1px #22abd5;
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
    line-height: 25px;
    padding: 20px 30px;
  }
</style>
