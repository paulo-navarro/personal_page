<template>
  <div 
    class="Drop"
    v-for="index in 120"
    :key="index"
    :style="{'margin-top': randTop(), left: randLeft(), 'animation-delay': randDelay()}"
    ></div>
</template>

<script>

export default {
  name: 'BackgroundRain',
  data() {
    return {}
  },
  computed: {

  },
  methods: {
    randDelay() {
      let rand = Math.floor(Math.random() * 1000);
      return `${rand}ms`;
    },

    randTop() {
      let rand = Math.floor(Math.random() * 100);
      return `-${rand}%`;
    },

    randLeft() {
      let rand = Math.floor(Math.random() * 100);
      return `${rand}%`;
    }
  }
}
</script>

<style scoped>
  .Drop {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1;
    width: 3px;
    height: 90px;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1));
    border-radius: 5px;
    animation: dropping 1s ease -10s infinite;
  }

  @keyframes dropping {
    0% { top: 0%;}
    100% { top: 200%;}
  }
</style>
