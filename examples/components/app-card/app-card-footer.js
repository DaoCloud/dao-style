export default {
  name: 'AppCardFooter',
  functional: true,
  render(createEle, context) {
    const slots = context.slots();

    const main = createEle('div', {
      class: 'footer-main',
    }, [
      slots.main,
    ]);

    const opt = createEle('div', {
      class: 'footer-opt',
    }, [
      slots.opt,
    ]);

    return createEle('div', { class: 'app-card-footer' }, [
      main, opt,
    ]);
  },
};
