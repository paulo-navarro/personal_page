<template id="homePage">
    <background-rain/>
    <div class="cardWrapper">
      <card-rain/>
    </div>
</template>

<script>

import CardRain        from "../components/card/CardRain.vue";
import BackgroundRain  from "../components/background/BackgroundRain.vue";

  export default {
    name: 'Rain',

    components: {
      BackgroundRain,
      CardRain
    },
    
    props: {
      msg: String
    },

    data () {
      return {};
    },

    created() {}
  }
</script>

<style scoped>

  .cardWrapper {
    position: fixed;
    z-index: 2;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

</style>
