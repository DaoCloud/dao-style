<style lang="scss">
  @import "../src/components/index.scss";
</style>
<style scoped>
nav {
  margin-bottom: 40px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
li {
  display: inline - block;
}
li + li {
  border-left: solid 1px #bbb;
  padding-left: 10px;
  margin-left: 10px;
}
.container {
  padding: 10px 40px;
}
.v-link-active {
  color: #bbb;
}
</style>
<template>
  <div class="container">
    <nav>
      <ul class="container-body">
        <!-- 请按照组件名称的字典顺序添加以下模块的example -->
        <li>
          <router-link to="/autocomplete">AutoComplete</router-link>
        </li>
        <li>
          <router-link to="/button">Button</router-link>
        </li>
        <li>
          <router-link to="/card">Card</router-link>
        </li>
        <li>
          <router-link to="/checkbox">Checkbox</router-link>
        </li>
        <li>
          <router-link to="/clipboard">Clipboard</router-link>
        </li>
        <li>
          <router-link to="/dialog">Dialog</router-link>
        </li>
        <li>
          <router-link to="/drag-drop">Draggable</router-link>
        </li>
        <li>
          <router-link to="/dropdown">Dropdown</router-link>
        </li>
        <li>
          <router-link to="/editable-list">Editable List</router-link>
        </li>
        <li>
          <router-link to="/editable-table">EditableTable</router-link>
        </li>
         <li>
          <router-link to="/info-card">InfoCard</router-link>
        </li>
        <li>
          <router-link to="/input">Input</router-link>
        </li>
        <li>
          <router-link to="/list">List</router-link>
        </li>
        <li>
          <router-link to="/list-group">List Group</router-link>
        </li>
        <li>
          <router-link to="/numeric-badge">Numeric Badge</router-link>
        </li>
        <li>
          <router-link to="/panel">Panel</router-link>
        </li>
        <li>
          <router-link to="/popover">Popover</router-link>
        </li>
        <li>
          <router-link to="/radio">Radio</router-link>
        </li>
        <li>
          <router-link to="/select">Select</router-link>
        </li>
        <li>
          <router-link to="/select-all">Select All</router-link>
        </li>
        <li>
          <router-link to="/setting-layout">Setting Layout</router-link>
        </li>
        <li>
          <router-link to="/steps">Steps</router-link>
        </li>
        <li>
          <router-link to="/slider">Slider</router-link>
        </li>
        <li>
          <router-link to="/svg">Svg</router-link>
        </li>
        <li>
          <router-link to="/switch">Switch</router-link>
        </li>
        <li>
          <router-link to="/progress">Progress</router-link>
        </li>
        <li>
          <router-link to="/tab">Tab</router-link>
        </li>
        <li>
          <router-link to="/table">Table</router-link>
        </li>
        <li>
          <router-link to="/tooltip">Tooltip</router-link>
        </li>
        <li>
          <router-link to="/tooltip-directive">Tooltip Directive</router-link>
        </li>
        <li>
          <router-link to="/input-with-label">InputWithLabel</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
