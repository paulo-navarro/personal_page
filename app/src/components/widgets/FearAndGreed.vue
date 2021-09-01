<template>
<section class="Gf_Content">
  <div v-if="loading">
    loading...
  </div>
  <div v-else>
   <h2 class="Gf_title">{{ status }}</h2>
  </div>

  <div class="Gf_value">
    <div
      class="Gf_valueBubble"
      :style="`background-color: ${valueColor}; margin-left: ${value}%;`"
     >
       {{ value }}
     </div>
  </div>

  <div class="Gf_bar">
    <div
      class="Gf_barLine"
      :style="`background-color: ${valueColor}; width: ${value}%;`"
      ></div>
  </div>
  <div class="Gf_labels">
    <div>Fear</div>
    <div>Greed</div>
  </div>
  </section>
</template>

<script>

const URL = 'https://api.alternative.me/fng/';

import axios from 'axios';

export default {
  name: 'Fear and Greed',
  data() {
    return {
      colorFear:  [115, 159, 251],
      colorGreed: [21, 226, 37],
      loading:    true,
      status:     null,
      value:      null,
      nextPulseCounter: 0
    }
  },

  created() {
    this.getData();
  },

  computed:{
    valueColor() {
      return this.interpolateColor(this.colorFear, this.colorGreed, this.value / 100);
    }
  },

  methods: {
    getData() {
      this.nextPulseCounter = null;
      axios.get(URL).then((response) => {
        let data    = response.data.data[0];
        //console.log(data);
        this.loading = false;
        this.status  = data.value_classification;
        this.value   = data.value;
        this.nextPulseCounter = parseInt(data.time_until_update + 100);
      })
    },

    interpolateColor(color1, color2, factor) {
      if (arguments.length < 3) {
        factor = 0.5;
      }
      var result = color1.slice();
      for (var i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
      }

      return `rgb(${result[0]},${result[1]},${result[2]})`;
    },
  },

  watch: {
    nextPulseCounter (newValue) {
      if(newValue) {
        setTimeout(() => {
          this.getData();
        }, newValue);
      }
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

  :root {
    --barBorderRadius: 20px;
    --barColorBackground: red;
  }

  .Gf_Content {
    --barBorderRadius: 20px;
    --barColorBackground: #1f1f1f;

    font-family: 'Roboto', sans-serif;
    color: #fff;
    padding: 20px;
    border-radius: 5px;
    background-color: #000;
  }

  .Gf_title {
    margin: 0 0 10px;
    font-weight: normal;
    font-size: 20px;
  }

  .Gf_bar {
    display: flex;
    width: 100%;
    height: 40px;
    margin: 0 auto;
    border-radius: var(--barBorderRadius);
    background-color: var(--barColorBackground);
  }

  .Gf_barLine {
    height: 100%;
    border-radius: var(--barBorderRadius) 0 0 var(--barBorderRadius);
  }

  .Gf_labels {
    display: flex;
    padding: 15px 5px 0;
    justify-content: space-between;
  }

  .Gf_labels div {
    flex: 0 0 auto;
  }

  .Gf_value {
    padding: 0 5px 10px;
  }

  .Gf_valueBubble {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    transform: translate(-50%, 0);
  }
</style>
