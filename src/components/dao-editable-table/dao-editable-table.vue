<template src="./dao-editable-table.html"></template>

<script src="./dao-editable-table.js">
</script>

<style lang="scss">
@import '../dao-color.scss';
.dao-table .det-edit-col {
  width: 50px;
  flex: 0 0 auto;
}
.det-tr {
  &.activate {
    background: #FFFCED;
  }
}
.det-add {
  display: inline-block;
  color: $blue;
  margin-top: 15px;
  cursor: pointer;
}
.det-add-btn {
  fill: currentColor;
  height: 16px;
  width: 16px;
  vertical-align: middle;
}
.det-add-span {
  vertical-align: middle;
}
svg.det-remove-btn {
  fill: $grey-light;
  cursor: pointer;
}
.det-input.dao-input-container {
  width: 100%;
  transform: translateY(-2px);
  .dao-input-inner {
    width: 100%;
  }
  input {
    width: 100%;
    border: 1px solid transparent;
    background: white;
    text-indent: 5px;
    padding: 0;
    transition: none;
    box-sizing: border-box;
    &:hover {
      border: 1px solid rgba($grey-light, 0.5);
    }
    &:focus {
      border: 1px solid $blue;
      box-shadow: 0 0 0 2px rgba($blue, 0.15);
    }
  }
}
</style>
