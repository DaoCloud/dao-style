<template>
  <div class="index">
    <canvas id="canvas">
    </canvas>
    <div class="center">
      <div class="name">
        <svg class="icon">
          <use xlink:href="#icon_daocloud"></use>
        </svg>
        <span class="text"><h2>Dao Style</h2></span>
      </div>
      <div class="desc">
        <h2>{{$t('index.desc')}}</h2>
        <i18n path="index.cr" tag="h4">
          <a href="https://www.daocloud.io/" target="_blank" place="company">DaoCloud</a>
        </i18n>
      </div>
      <div class="btns">
        <button class="dao-btn green" @click="goToGetStarted">{{$t('get_started')}}</button>
        <github-btn color="dark" :mini="false"></github-btn>
      </div>
    </div>
  </div>
</template>

<script>

// https://codepen.io/wulv5/pen/dpRmjR
/* eslint-disable */
function renderStar() {
  window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
  let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight),
    hue = 217,
    stars = [],
    count = 0,
    maxStars = 1200;
  let canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
  canvas2.width = 100;
  canvas2.height = 100;
  let half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  gradient2.addColorStop(0.025, '#fff');
  gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
  gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
  gradient2.addColorStop(1, 'transparent');
  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();
  function random(min, max) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }
    if (min > max) {
      let hold = max;
      max = min;
      min = hold;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function maxOrbit(x, y) {
    let max = Math.max(x, y),
      diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
  }

  let Star = function() {
    this.orbitRadius = random(maxOrbit(w, h));
    this.radius = random(60, this.orbitRadius) / 12;
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / 900000;
    this.alpha = random(2, 10) / 10;
    count++;
    stars[count] = this;
  };
  Star.prototype.draw = function() {
    let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(10);
    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(
      canvas2,
      x - this.radius / 2,
      y - this.radius / 2,
      this.radius,
      this.radius
    );
    this.timePassed += this.speed;
  };
  for (let i = 0; i < maxStars; i += 1) {
    new Star();
  }
  function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 1, l = stars.length; i < l; i += 1) {
      stars[i].draw();
    }
    window.requestAnimationFrame(animation);
  }
  animation();
}

export default {
  name: 'Index',
  mounted() {
    renderStar();
    window.addEventListener('resize', this.renderStar);
  },
  methods: {
    renderStar() {
      renderStar();
    },
    goToGetStarted() {
      this.$router.push('/components/installation');
    },
  },
  destroyed() {
    window.removeEventListener('resize', this.renderStar);
  },
};
</script>

<style lang="scss" scoped>
@import "daoColor";
.index {
  background: $black-light;
  background: #060e1b;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: $white;
  .center {
    z-index: 1;
    .name,
    .desc {
      margin-bottom: 25px;
    }
    .name {
      font-size: 18px;
      svg {
        height: 26px;
        width: 26px;
      }
    }
    .desc {
      h2 {
        font-size: 36px;
      }
      h4 {
        font-size: 20px;
        margin-top: 25px;
        a {
          color: $white;
        }
      }
    }
  }
  canvas {
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
