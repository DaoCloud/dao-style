import { createVue, destroyVM } from '../util';

describe('Input', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <dao-input
          :maxlength="12"
          placeholder="请输入内容"
          @focus="handleFocus"
          value="testCreate">
        </dao-input>
      `,
      data() {
        return {
          inputFocus: false,
        };
      },
      methods: {
        handleFocus() {
          this.inputFocus = true;
        },
      },
    }, true);
    const inputElm = vm.$el.querySelector('input');
    inputElm.focus();
    expect(vm.inputFocus).to.be.true;
    expect(inputElm.getAttribute('placeholder')).to.equal('请输入内容');
    expect(inputElm.value).to.equal('testCreate');
    expect(inputElm.getAttribute('maxlength')).to.equal('12');
  });

  it('disabled', () => {
    vm = createVue({
      template: `
        <dao-input disabled>
        </dao-input>
      `,
    }, true);
    expect(vm.$el.querySelector('input').getAttribute('disabled')).to.ok;
  });

  describe('Input Events', () => {
    it('event:focus & blur', (done) => {
      vm = createVue({
        template: `
          <dao-input
            ref="input"
            placeholder="请输入内容"
            value="input">
          </dao-input>
        `,
      }, true);

      const spyFocus = sinon.spy();
      const spyBlur = sinon.spy();

      vm.$refs.input.$on('focus', spyFocus);
      vm.$refs.input.$on('blur', spyBlur);
      vm.$el.querySelector('input').focus();
      vm.$el.querySelector('input').blur();

      vm.$nextTick(() => {
        expect(spyFocus.calledOnce).to.be.true;
        expect(spyBlur.calledOnce).to.be.true;
        done();
      });
    });
    it('event:change', (done) => {
      vm = createVue({
        template: `
          <dao-input
            ref="input"
            placeholder="请输入内容"
            :value="input">
          </dao-input>
        `,
        data() {
          return {
            input: 'test',
          };
        },
      }, true);

      const spy = sinon.spy();
      vm.$refs.input.$on('change', spy);
      vm.input = 'testChange';

      vm.$nextTick(() => {
        expect(spy.withArgs('testChange').calledOnce).to.be.false;
        done();
      });
    });
  });
});
