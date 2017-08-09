<template>
  <div class="dao-setting-layout">
    <div class="dao-setting-layout-title">
      <div class="dao-setting-title">
        <slot name="layout-title"></slot>
        <div class="helper-text">
          <slot name="layout-title-helper"></slot>
        </div>
      </div>
    </div>
    <slot></slot>
    <div class="dao-setting-layout-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DaoSettingLayout',
  mounted() {
    // 此处手动判断.dao-setting-title子元素是否只有.helper-text一个
    // 如果只有这一个，说明没有添加section-title这个slot，则移除.dao-setting-layout-title这个元素
    // 原来用this.$slots来判断会导致一系列bug
    // TODO 如果css4标准实现了可以直接通过判断子元素的个数来选中父元素让其display置为none就好了
    this.$nextTick(() => {
      const settingTitle = this.$el.querySelector('.dao-setting-title');
      if (settingTitle.children.length === 1) {
        const layoutTitle = settingTitle.parentElement; // .dao-setting-layout-title这个元素
        layoutTitle.parentElement.removeChild(layoutTitle);
      }
    });
  },
};
</script>
<style lang="scss">
@import './dao-setting-layout.scss';
</style>
