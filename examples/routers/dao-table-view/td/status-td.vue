<template>
  <td>
    <svg>
      <use :style="{fill: colorMap[color]}" xlink:href="#icon_status-dot-small"></use>
    </svg>
    <span>{{text}}</span>  
  </td>
</template>
<script>
export default {
  name: 'StatusTd',
  props: ['color', 'text'],
  data() {
    return {
      colorMap: {
        blue: '#3890ff',
        green: '#22c36a',
        yellow: '#f7b32b',
        orange: '#f56e25',
        red: '#f1483f',
        purple: '#7354e2',
        grey: '#ccd1d9',
      },
    };
  },
};
</script>
