import { createVue, destroyVM } from '../util';

describe('NumericBadge', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', (done) => {
    vm = createVue({
      template: `
        <dao-numeric-badge :ghost='isGhost'>{{testNumber}}</dao-numeric-badge>
      `,
      data() {
        return {
          testNumber: 23,
          isGhost: true,
        };
      },
    }, true);
    const numeridBadgeElms = vm.$el.parentNode.querySelectorAll('.dao-numeric-badge');
    const numeridBadgeElm = numeridBadgeElms[0];
    expect(numeridBadgeElms.length).to.equal(1);
    expect(numeridBadgeElm.className.indexOf('ghost')).to.be.not.equal(-1);
    expect(numeridBadgeElm.innerText).to.be.equal('23');
    vm.testNumber = 34;
    vm.isGhost = false;
    vm.$nextTick(() => {
      expect(numeridBadgeElm.className.indexOf('ghost')).to.be.equal(-1);
      expect(numeridBadgeElm.innerText).to.be.equal('34');
      done();
    });
  });
});
