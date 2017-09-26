<template>
  <td>
    <svg>
      <use :style="{fill: color}" xlink:href="#icon_status-dot-small"></use>
    </svg>
    <span>{{text}}</span>  
  </td>
</template>
<script>
export default {
  name: 'StatusTd',
  props: ['color', 'text'],
};
</script>
