<template src="./dao-autocomplete.html">
</template>

<script src="./dao-autocomplete.js">
</script>

<style lang="scss">
@import '../dao-color.scss';

.dao-autocomplete {
  width: 287px;
  height: 32px;
}

.dao-autocomplete-dropdown {
  z-index: 100;
  overflow: auto;
  max-height: 152px !important;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: white;
  border: 1px solid rgba(61,68,79,.06);
  border-radius: 5px;
  box-shadow: 0 5px 12px 0 rgba(61,68,79,.3);
  background-clip: padding-box;
}
.dao-autocomplete-li {
  display: block;
  padding: 5px 15px;
  clear: both;
  font-weight: 400;
  line-height: 20px;
  color: #3d444f;
  white-space: nowrap;
  cursor: pointer;
  &.current {
    text-decoration: none;
    color: white;
    background-color: $blue;
  }
}

</style>
