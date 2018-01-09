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

    return h('div', { class: 'dao-setting-layout' }, [
      LayoutTitle, defaultSlot, Footer,
    ]);
  },
};
