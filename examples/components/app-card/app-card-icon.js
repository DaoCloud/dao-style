export default {
  name: 'AppCardIcon',
  functional: true,
  render(createEle, context) {
    return createEle('div', { class: 'icon' }, [
      context.slots().default,
    ]);
  },
};
