import './dao-setting-layout.scss';

export default {
  name: 'DaoSettingLayout',
  functional: true,
  render(h, context) {
    const slots = context.slots();

    const layoutTitleSlot = slots['layout-title'];
    const layoutTitleHelperSlot = slots['layout-title-helper'];
    const defaultSlot = slots.default;
    const footerSlot = slots.footer;

    const LayoutTitleHelper = layoutTitleHelperSlot ?
      h('div', { class: 'helper-text' }, [
        layoutTitleHelperSlot,
      ]) : '';

    const LayoutTitle = layoutTitleSlot ?
      h('div', { class: 'dao-setting-layout-title' }, [
        h('div', { class: 'dao-setting-title' }, [
          layoutTitleSlot,
          LayoutTitleHelper,
        ]),
      ]) : '';

    const Footer = footerSlot ?
      h('div', { class: 'dao-setting-layout-footer' }, [
        footerSlot,
      ]) : '';

    return h('div', {
      ...context.data,
      // 此处不用 `class: 'dao-setting-layout'` 的原因为：
      // dao-setting-layout 这个类会覆盖外部传入的动态绑定 class
      // 导致在组件外部传入 :class="['testClass']" 类似用法会失效
      staticClass: `dao-setting-layout ${context.data.staticClass}`,
    }, [
      LayoutTitle, defaultSlot, Footer,
    ]);
  },
};
