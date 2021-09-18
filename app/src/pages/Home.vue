<template id="homePage">
    <component :is="`background-${style}`"></component>
    <div class="cardWrapper">
      <component :is="`card-${style}`"></component>
      <card/>
    </div>
</template>

<script>
const STYLES = ['rain', 'stars'];

import CardRain        from "../components/card/CardRain.vue";
import CardStars       from "../components/card/CardStars.vue";
import BackgroundRain  from "../components/background/BackgroundRain.vue";
import BackgroundStars from "../components/background/BackgroundStars.vue";

export default {
  name: 'Home',

  components: {
    BackgroundRain,
    BackgroundStars,
    CardRain,
    CardStars,
  },
  
  props: {
    msg: String
  },

  data () {
    return {
      style: null
    };
  },

  created() {
    let rand = Math.floor(Math.random() * 2);
    this.style = STYLES[rand];
    console.log(this.style);
  }
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
