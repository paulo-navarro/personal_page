<template>
  <div class="BackgroundStars">
    <div class="background">
      <div
        v-for="index in stars"
        :key="index"
        class="star"
        :style="{'top': randTop(), left: randLeft(), 'animation-delay': randDelay()}"
        :ref="`star${index}`"
      />
    </div>

  </div>
</template>

<script>

export default {
  name: 'BackgroundStars',
  data() {
    return {
      stars: 0,
    }
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
      this.stars = parseInt(window.innerWidth / 10);console.log('stars', this.stars)
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
  }

}
</script>

<style scoped>

  .BackgroundStars{
    position: fixed;
    display: block;
    height: 100%;
    width: 100%;
    z-index: 3;
  }

  .background {
    position: fixed;
    z-index: 1;
    display: block;
    height: 100%;
    width: 100%;
  }

  .star {
    position: fixed;
    width: 1px;
    height: 1px;
    background-color: #fff;
    border-radius: 50%;
    animation: blink 6s linear infinite alternate;
  }

  @keyframes blink {
    0%{
      opacity: 1;
    }
    50%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

</style>
