<template>
  <div class="BackgroundBigStars">
    <background-stars-borders></background-stars-borders>
    <div class="background">
      <star
        v-for="index in stars"
        :key="index"
        class="star"
        :baseColor="randColor()"
        :style="{'top': randTop(), left: randLeft(), 'animation-delay': randDelay()}"
        :ref="`star${index}`"
      />
    </div>

  </div>
</template>

<script>

const COLORS = ['#fb3887', '#38c3fb'];

import backgroundStarsBorders from "./BackgroundStarsBorders.vue";
import star                   from "../Star.vue";

export default {
  name: 'BackgroundBigStars',
  data() {
    return {
      stars: 0,
    }
  },
  components: {
    backgroundStarsBorders,
    star
  },

  mounted() {
   this.calcStars();
   window.addEventListener('resize', this.calcStars);
  },

  unmounted() {
    window.removeEventListener('resize', this.calcStars);
  },

  methods: {
    calcStars() {
      this.stars = parseInt(window.innerWidth / 150); console.log( 'big stars', this.stars)
    },

    randTop() {
      let rand = Math.floor(Math.random() * 100);
      return `${rand}%`;
    },

    randLeft() {
      let rand = Math.floor(Math.random() * 100);
      return `${rand}%`;
    },

    randDelay() {
      let rand = Math.floor(Math.random() * 24000);
      let isPositive = Math.floor(Math.random() * 2);
      let delay = isPositive === 1 ? `${rand}ms` : `-${rand}ms`;

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

  .BackgroundBigStars{
    position: fixed;
    display: block;
    height: 100%;
    width: 100%;
    z-index: 4;
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
    animation: grow 6s linear infinite alternate;
  }

  @keyframes grow {
    50%{
      transform: scale(1, 1);
    }

    100%{
      transform: scale(2, 2);
    }
  }

</style>
