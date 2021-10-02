<template>
  <select
    class="SelectTheme"
    @change="routeTo($event)"
  >
    <option
      v-for="(route, key) in routeOptions"
      :key="key"
      :value="route"
      :selected="route === $route.name ? true : false"
      
    >
      {{ route }}
    </option>
  </select>
</template>

<script>



  export default {
    name: 'SelectTheme',

    props: {
      selected: {
        type: String,
        defaultValue: ''
      }
    },

    data() {
      return { 
        routeOptions: []
      }
    },

    created () {
      let routes = this.$router.getRoutes();

      for ( let i = 1; i < routes.length; i++) {
        this.routeOptions.push(routes[i].name)
      }
    },

    methods: {
      routeTo(event) {
        this.$router.push(event.target.value);
      }
    }
  }
</script>

<style scoped language="scss">
  .SelectTheme {
    padding: 0px 5px;
    font-size: 18px;
    font-family: Verdana,Geneva,sans-serif; 
    -webkit-appearance: none;
    text-align: center;
    appearance: none;
    border-color: #2f2f2f;
    border-radius: 2px;
    color: #fff;
    background-color: transparent;
  }

  .SelectTheme option {
     color: #000;
   }
</style>
