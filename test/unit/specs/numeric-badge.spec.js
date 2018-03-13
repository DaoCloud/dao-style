import { createVue, destroyVM } from '../util';

describe('NumericBadge', () => {
  let vm;
  const normalBackgroundColor = 'rgb(204, 209, 217)';
  const ghostBackgroundColor = 'rgba(0, 0, 0, 0)';
  const borderRadius = '8px';
  const display = 'inline-block';
  const commonExpect = ($el, expectNumber) => {
    expect($el.className.indexOf('ghost')).to.be.equal(-1);
    expect($el.className.indexOf('dao-numeric-badge')).to.be.not.equal(-1);
    expect($el.innerText).to.be.equal(expectNumber);
    expect(getComputedStyle($el).getPropertyValue('background-color')).to.be.equal(normalBackgroundColor);
    expect(getComputedStyle($el).getPropertyValue('border-radius')).to.be.equal(borderRadius);
    expect(getComputedStyle($el).getPropertyValue('display')).to.be.equal(display);
  };

  afterEach(() => {
    destroyVM(vm);
  });

  it('create basic numeric-badge', () => {
    vm = createVue({
      template: `
        <dao-numeric-badge>{{testNumber}}</dao-numeric-badge>
      `,
      data() {
        return {
          testNumber: 11,
        };
      },
    }, true);
    commonExpect(vm.$el, vm.testNumber.toString());
  });

  it('create normal numeric-badge', () => {
    vm = createVue({
      template: `
        <dao-numeric-badge :ghost='isGhost'>{{testNumber}}</dao-numeric-badge>
      `,
      data() {
        return {
          testNumber: 22,
          isGhost: false,
        };
      },
    }, true);
    commonExpect(vm.$el, vm.testNumber.toString());
  });

  it('create ghost numeric-badge', () => {
    vm = createVue({
      template: `
        <dao-numeric-badge :ghost='isGhost'>{{testNumber}}</dao-numeric-badge>
      `,
      data() {
        return {
          testNumber: 33,
          isGhost: true,
        };
      },
    }, true);
    expect(vm.$el.parentNode.querySelector('.dao-numeric-badge.ghost')).to.exist;
    expect(getComputedStyle(vm.$el).getPropertyValue('background-color')).to.be.equal(ghostBackgroundColor);
  });
});
