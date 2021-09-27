<template id="homePage">
  <div></div>
</template>

<script>


export default {
  name: 'Home',

  created() {
    let routes = this.$router.getRoutes();
    let rand = Math.floor(Math.random() * (routes.length - 1));

    this.$router.push(routes[rand + 1].name);
  }
}
</script>
