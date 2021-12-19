<template>
  <section class="stars">
    <background-stars />
    <background-big-stars />
    <div class="cardWrapper">
      <card-stars />
    </div>
  </section>
</template>

<script>

import BackgroundBigStars from "../components/background/BackgroundBigStars.vue";
import BackgroundStars from "../components/background/BackgroundStars.vue";
import CardStars       from "../components/card/CardStars.vue";

export default {
  name: 'Stars',

  components: {
    BackgroundBigStars,
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
  .stars {
    display: block;
    height: 100%;
    width: 100%;
    background-color: #000;
  }
  .cardWrapper {
    position: fixed;
    z-index: 6;
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

</style>
