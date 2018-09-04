<template>
  <div>
    <input type="range"
      min="20"
      max="100"
      v-model="widthValue">
    <div class="dao-list-group-container"
      :style="{width: widthValue + '%'}">
      <h1>Normal</h1>
      <br>
      <ul class="dao-list-group">
        <li class="dao-list-item"
          v-for="item in 5"
          :key="item">
          item{{item}}
        </li>
      </ul>
      <br>
      <h1>Active</h1>
      <br>
      <ul class="dao-list-group">
        <li :class="['dao-list-item', {active: item === 2}]"
          v-for="item in 5"
          :key="item">
          item {{item}}
          <span v-if="item === 2">active</span>
        </li>
      </ul>
      <br>
      <h1>Icon</h1>
      <br>
      <ul class="dao-list-group">
        <li :class="['dao-list-item', {active: item === 2}]"
          v-for="item in 5"
          :key="item">
          item{{item}}
          <span class="icon">
            <svg>
              <use xlink:href="#icon_caret-right"></use>
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      widthValue: '20',
    };
  },
};
</script>

<style scoped lang="scss">

</style>

