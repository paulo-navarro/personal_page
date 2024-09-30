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
        { url: 'https://www.linkedin.com/in/paulo-navarro-271a8b25/', text: 'LINKEDIN' },
        { url: 'https://github.com/paulo-navarro?tab=repositories',   text: 'GITHUB' },
        { url: 'https://crystalball.pages.dev',                       text: 'CRYSTAL BALL' }
      ]
    }
  }
}
</script>

<style scoped>
  .CardLinks {
    display: grid;
    grid-gap: 20px 5px;
    width: 100%;
    grid-template-columns: 50% 50%;
    margin: 20px 0 0;
    padding: 20px;
  }

  .CardLinks a {
    color: #fff;
    flex: 1 1 auto;
    text-align: center;
    text-decoration: none;
  }
</style>
