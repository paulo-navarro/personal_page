<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 15.875 15.875"
    id="star"
  >
    <defs id="defs8573">
      <linearGradient :id="`linearGradient10469${baseColor}`" inkscape:collect="always">
        <stop id="stop10465" offset="0" :style="{'stop-color': baseColor, 'stop-opacity':'0.38495576'}"></stop>
        <stop id="stop10467" offset="1" :style="{'stop-color': baseColor, 'stop-opacity':0}"></stop>
      </linearGradient>
      <linearGradient inkscape:collect="always" :id="`linearGradient9850${baseColor}`">
        <stop style="stop-color:#fff;stop-opacity:0.8" offset="0" id="stop9846"></stop>
        <stop :style="{'stop-color':baseColor, 'stop-opacity': '0.98230088'}" offset="1" id="stop9848"></stop>
      </linearGradient>
      <filter inkscape:collect="always" style="color-interpolation-filters:sRGB" :id="`filter9228`" x="-0.1056" width="1.2112" y="-0.1056" height="1.2112">
        <feGaussianBlur inkscape:collect="always" stdDeviation="0.46373564" id="feGaussianBlur9230"></feGaussianBlur>
      </filter>
      <radialGradient inkscape:collect="always" :xlink:href="`#linearGradient9850${baseColor}`" :id="`radialGradient9854${baseColor}`" cx="7.9375" cy="289.0625" fx="7.9375" fy="289.0625" r="5.6364955" gradientTransform="matrix(0.61854927,-0.00920869,0.00677574,0.45512782,1.0691521,157.5752)" gradientUnits="userSpaceOnUse"></radialGradient>
      <filter inkscape:collect="always" style="color-interpolation-filters:sRGB" :id="`filter9860${baseColor}`" x="-0.022800017" width="1.0456" y="-0.022799983" height="1.0456">
        <feGaussianBlur inkscape:collect="always" stdDeviation="0.1001248" id="feGaussianBlur9862"></feGaussianBlur>
      </filter>
      <radialGradient inkscape:collect="always" :xlink:href="`#linearGradient10469${baseColor}`" :id="`radialGradient10463${baseColor}`" cx="8.2209816" cy="8.4572172" fx="8.2209816" fy="8.4572172" r="6.7090774" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.7854616,-0.0244435,0.02444354,0.7854627,1.2735104,1.4956209)"></radialGradient>
    </defs>
    <g inkscape:groupmode="layer" id="layer2" inkscape:label="sphere">
      <circle
        style="opacity:1;fill-opacity:1;stroke:none;stroke-width:2.18799996;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
        :style="{'fill': `url(#radialGradient10463${baseColor})`}"
        id="path10455" cx="7.9375" cy="7.9375" r="6.7090774"></circle>
    </g>
    <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-281.125)">
      <path 
        transform="rotate(32.161114,7.605338,290.8307)" 
        style="opacity:1;fill:#ffae1f;fill-opacity:0.57079649;stroke:none;stroke-width:3.89519978;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;" d="m 9.8892245,293.53083 -2.8288487,-3.8054 -0.8246605,3.13277 0.3890249,-3.21789 -4.0532409,2.46062 3.8053918,-2.82885 -2.9927738,-0.91269 3.0778981,0.47705 -2.4606158,-4.05324 2.8288486,3.80539 0.8646577,-3.15791 -0.429022,3.24304 4.0532411,-2.46062 -3.8053921,2.82885 2.7476391,1.01101 -2.8327633,-0.57538 z"
        :style="{'filter': `url(#filter9228${baseColor})`}"
        id="path9124" 
        ></path>
      <path
        style="opacity:1;fill-opacity:1;stroke:none;stroke-width:3.89519978;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;" d="m 8.1014935,294.33223 -0.369154,-4.72728 -2.365699,2.21309 2.042219,-2.51704 -4.741082,-0.0745 4.727274,-0.36916 -2.04772,-2.3657 2.351675,2.04222 0.0745,-4.74109 0.369159,4.72727 2.4129405,-2.21308 -2.0894665,2.51704 4.7410825,0.0745 -4.7272745,0.36917 1.7878655,2.31844 -2.0918135,-1.99498 z"
        :style="{'fill': `url(#radialGradient9854${baseColor})`, 'filter': `url(#filter9860${baseColor})`}"
        id="path9124-7">
        </path>
    </g>
  </svg>
</template>

<script>

export default {
  name: 'Star',
  props: {
    baseColor: {
      type: String,
      default: '#e85dde'
    }
  }
}
</script>

<style scoped>

  #star #path9124 { 
    animation: svgA_0 5s 0s infinite alternate;
  }

  #star #path9124-7 { 
    animation: svgA_1 5s 0s infinite alternate;
  }


  @keyframes svgA_0 {
    0.0000% {
      transform-origin: 7.605338px 290.8307px;
    }
    100.0000% {
      transform-origin: 7.605338px 290.8307px;
    }
  }

  @keyframes svgA_1 {
    0.0000% {
      d:path('m 8.1014935,294.33223 -0.369154,-4.72728 -2.365699,2.21309 2.042219,-2.51704 -4.741082,-0.0745 4.727274,-0.36916 -2.04772,-2.3657 2.351675,2.04222 0.0745,-4.74109 0.369159,4.72727 2.4129405,-2.21308 -2.0894665,2.51704 4.7410825,0.0745 -4.7272745,0.36917 1.7878655,2.31844 -2.0918135,-1.99498 z');
      transform-origin: 7.9374999px 289.0625px;
    }
    100.0000% {
      d:path('m 8.0089083,292.47367 -0.2765688,-2.86872 -3.2116599,3.19358 2.8881799,-3.49753 -3.8042071,-0.20645 3.7903991,-0.23721 -2.8435196,-3.12688 3.1474746,2.8034 0.167991,-3.00298 0.275668,2.98916 2.9706915,-3.06601 -2.6472175,3.36997 3.6328975,0.19126 -3.6190895,0.25241 2.8906155,2.9244 -3.1945635,-2.60094 z');
    }
  } 
</style>
