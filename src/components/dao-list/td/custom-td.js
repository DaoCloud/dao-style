export default {
  name: 'CustomTd',
  props: ['renderFunc', 'td'],
  render(createElement) {
    return this.renderFunc(createElement, this.td);
  },
};
