<template>
  <div class="BackgroundStars">
    <div class="background">
      <star
        v-for="index in 42"
        :key="index"
        class="star"
        :baseColor="randColor()"
        :style="{'top': randTop(), left: randLeft(), 'animation-delay': randDelay()}"
      />
    </div>
  </div>
</template>

<script>

const COLORS = ['#f61fff', '#1fbcff', '#7f1fff', '#1f35ff'];

import star from "../Star.vue";

export default {
  name: 'BackgroundStars',
  components: {star},
  methods: {
    randTop() {
      let rand = Math.floor(Math.random() * 100);
      return `${rand}%`;
    },

    randLeft() {
      let rand = Math.floor(Math.random() * 100);
      return `${rand}%`;
    },

    randDelay() {
      let rand = Math.floor(Math.random() * 12000);
      let isPositive = Math.floor(Math.random() * 2);
      let delay = isPositive === 1 ? `${rand}ms` : `-${rand}ms`;
       console.log(isPositive, delay)
      return delay;
    },

    randColor() {
      let rand = Math.floor(Math.random() * COLORS.length);
      return `${COLORS[rand]}`;
    }
  }

}
</script>

<style scoped>

  .BackgroundStars{
    position: fixed;
    display: block;
    height: 100%;
    width: 100%;
    background: #000;
  }

  .background {
    position: fixed;
    z-index: 1;
    display: block;
    height: 100%;
    width: 100%;
  }

  .rotateClock {
    animation: rotateClock 120s linear infinite;
  }
  
  .rotateCouterClock {
    animation: rotateCouterClock 120s linear infinite;
  }

  .star {
    position: fixed;
    animation: grow 12s linear infinite alternate;
  }

  @keyframes grow {
    50%{
      transform: scale(1, 1);
    }

    100%{
      transform: scale(4, 4);
    }
  }

</style>
