/**
 * Created by jixiaomeng on 2017/6/19.
 */
import { createVue, destroyVM } from '../util';

describe('Autocomplete', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', (done) => {
    const opt = ['apple', 'application', 'app'];
    vm = createVue({
      template: `
        <dao-autocomplete
          :options="opt"
          :value="value"
          placeholder="placeholder">
        </dao-autocomplete>
      `,
      data() {
        return {
          opt,
          value: 'apple',
        };
      },
    }, true);
    const inputElm = vm.$el.querySelector('input');
    const dropElm = vm.$el.querySelector('.dao-autocomplete-dropdown');
    expect(dropElm.style.display).to.equal('none');
    expect(inputElm.value).to.equal('apple');
    // expect(inputElm.getAttribute('placeholder')).to.equal('placeholder');
    inputElm.focus();
    vm.$nextTick(() => {
      expect(dropElm.querySelectorAll('li').length).to.equal(1);
      done();
    });
  });

  it('value not in opts', (done) => {
    const opt = ['apple', 'application', 'app'];
    vm = createVue({
      template: `
        <dao-autocomplete
          :options="opt"
          :value="value"
          placeholder="placeholder">
        </dao-autocomplete>
      `,
      data() {
        return {
          opt,
          value: 'appl',
        };
      },
    }, true);
    const inputElm = vm.$el.querySelector('input');
    const dropElm = vm.$el.querySelector('.dao-autocomplete-dropdown');
    expect(inputElm.value).to.equal('appl');
    inputElm.focus();
    vm.$nextTick(() => {
      expect(dropElm.querySelectorAll('li').length).to.equal(2);
      done();
    });
  });

  describe('Input Events', () => {
    it('event:change', (done) => {
      const opt = ['test', 'test2', 'model2', 'model3'];
      vm = createVue({
        template: `
        <dao-autocomplete
          ref="autocomplete"
          :options="opt"
          :value="value"
          placeholder="placeholder">
        </dao-autocomplete>
      `,
        data() {
          return {
            opt,
            value: '',
          };
        },
      }, true);
      const inputElm = vm.$el.querySelector('input');
      const dropElm = vm.$el.querySelector('.dao-autocomplete-dropdown');
      expect(inputElm.value).to.be.empty;
      inputElm.focus();
      vm.value = 'test';
      vm.$nextTick(() => {
        expect(dropElm.style.display).to.not.equal('none');
        expect(dropElm.querySelectorAll('li').length).to.equal(2);
        done();
      });
    });
  });

  describe('Async Options', () => {
    it('async options', (done) => {
      const opt = ['apple', 'application', 'app'];
      vm = createVue({
        template: `
        <dao-autocomplete
          :options="opt"
          :value="value"
          placeholder="placeholder">
        </dao-autocomplete>
      `,
        data() {
          return {
            opt,
            value: 'apple',
          };
        },
      }, true);
      const inputElm = vm.$el.querySelector('input');
      const dropElm = vm.$el.querySelector('.dao-autocomplete-dropdown');
      inputElm.focus();
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(['test', 'test2', 'abc', 'cde', 'loooooooong']);
        }, 0);
      }).then((opts) => {
        vm.opt = opts;
        vm.value = 'test';
        vm.$nextTick(() => {
          expect(dropElm.style.display).to.not.equal('none');
          expect(dropElm.querySelectorAll('li').length).to.equal(2);
          done();
        });
      });
    });
  });
});

