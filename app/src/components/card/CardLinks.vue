<template>
  <div class="CardLinks">
    <a
      v-for="(link, key) in links"
      :key="key"
      :href="link.url"
    >
      {{ link.text }}
     </a>
  </div>
</template>

<script>

export default {
  name: 'CardLinks',
  data() {
    return { 
      links: [
        { url: 'https://www.redbubble.com/people/paulonavarro/shop',  text: 'PRODUCTS' },
        { url: 'https://github.com/paulo-navarro?tab=repositories',   text: 'GITHUB' },
        { url: 'https://ball.paulonavarro.com/',                      text: 'CRYSTAL BALL' },
        { url: 'https://tarot.paulonavarro.com',                      text: 'TAROT' },
      ]
    }
  }
}
</script>

<style scoped>
  .CardLinks {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 5px;
    width: 100%;
    margin: 20px 0 0;
    padding: 20px;
  }

  .CardLinks a {
    color: #fff;
    padding: 5px;
    flex: 1 1 calc(50% - 20px);
    text-align: center;
    text-decoration: none;
  }

  .CardLinks a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
