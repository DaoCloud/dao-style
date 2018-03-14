<template>
  <div class="dao-left-nav-section">
    <h2 class="dao-left-nav-title">{{ section.name }}</h2>

    <div
      class="dao-left-nav-group"
      v-for="ul in section.children"
      :key="ul.name"
      :style="{ 'pointer-events': ul.isDisabled ? 'none' : 'all' }">

      <div
        class="dao-left-nav-ul-title"
        @click="routeTo(ul.state || '/', ul)"
        :class="{ active: ulActive(ul) }">

        <!-- 如果有子目录就显示一个折叠标记 -->
        <svg
          class="down-arrow"
          :class="{ 'right-arrow': !ul.children.length }"
          @click.stop="toggle(ul.name)"
          v-if="ul.children && ul.children.length">
          <use xlink:href="#icon_down-arrow"></use>
        </svg>
        <svg class="text-icon">
          <use :xlink:href="ul.icon"></use>
        </svg>
        <span class="dao-left-nav-ul-title-name">
          {{ ul.name }}
        </span>
      </div>
      <ul
        class="dao-left-nav-ul"
        v-if="ul.children && ul.children.length">
        <li
          class="dao-left-nav-item"
          :class="{ active: li.isActive() }"
          v-for="li in ul.children"
          @click="routeTo(li.state || '/', li)"
          v-if="li.isShow()"
          :key="li.name">
          <span class="item-span">{{ li.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarSection',
  props: {
    section: { type: Object, default: () => ({}) },
  },
  methods: {
    ulActive(ul) {
      if (!ul.children) {
        return ul.isActive();
      }
      return ul.children.some(li => li.isActive());
    },

    routeTo(name = 'Overview') {
      return this.$router.push({ name });
    },

    toggle() {
      console.log('toggle');
    },
  },
};
</script>
