export default {
  name: 'CustomTd',
  props: ['renderFunc', 'td'],
  render(createElement) {
    return createElement('td', [this.renderFunc(createElement, this.td)]);
  },
};
