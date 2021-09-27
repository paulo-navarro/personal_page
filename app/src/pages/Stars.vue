<template>
    <background-stars />
    <div class="cardWrapper">
      <card-stars />
    </div>
</template>

<script>

import BackgroundStars from "../components/background/BackgroundStars.vue";
import CardStars       from "../components/card/CardStars.vue";

export default {
  name: 'Stars',

  components: {
    BackgroundStars,
    CardStars,
  },
  
  props: {
    msg: String
  },

  data () {
    return {};
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
