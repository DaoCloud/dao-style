<template>
  <div>
    <div :style="{width: boxWidth + '%'}">
      <ul class="dao-list-group">
        <li class="dao-list-item">item1</li>
        <li class="dao-list-item">item2</li>
        <li class="dao-list-item">item3</li>
      </ul>
    </div>
    <input type="range" min="20" max="100" v-model="boxWidth"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        boxWidth: 20,
      };
    },
  }
</script>
