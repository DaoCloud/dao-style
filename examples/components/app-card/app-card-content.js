export default {
  name: 'AppCardContent',
  functional: true,
  render(createEle, context) {
    const slots = context.slots();

    const title = createEle('div', {
      class: 'title',
    }, [
      slots.title,
    ]);

    const subTitle = createEle('div', {
      class: 'sub-title',
    }, [
      slots['sub-title'],
    ]);

    const desc = createEle('div', {
      class: 'desc',
    }, [
      slots.desc,
    ]);

    return createEle('div', { class: 'content' }, [
      title, subTitle, desc,
    ]);
  },
};
