import { createVue, destroyVM } from '../util';

describe('Switch', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <dao-switch 
          :option="{ on: '是', off: '否' }"
          :with-notice="true"
          :name="name"
          v-model="normal.isChecked">
        </dao-switch>
      `,
      data() {
        return {
          name: 'DaoSwitch',
          normal: {
            isChecked: false,
          },
        };
      }, 
    }, true);

    const inputElm = vm.$el.querySelector('.dao-switch-input');
    const noticeElm = vm.$el.querySelector('.dao-switch-notice');

    expect(vm.$el.classList.contains('disabled')).to.equal(false);
    expect(vm.$el.querySelector('.dao-switch-checked')).to.not.exist;
    expect(inputElm.getAttribute('name')).to.equal('DaoSwitch');
    expect(noticeElm.querySelector('span').innerHTML).to.equal('否');
    expect(vm.$el.querySelector('.dao-switch-core').style.width).to.equal('54px');
  });

  it('test "isChecked"', () => {
    vm = createVue({
      template: `
        <dao-switch 
          :option="{ on: '是', off: '否' }"
          :with-notice="true"
          :name="name"
          v-model="normal.isChecked">
        </dao-switch>
      `,
      data() {
        return {
          name: 'DaoSwitch',
          normal: {
            isChecked: true,
          },
        };
      }, 
    }, true);

    const inputElm = vm.$el.querySelector('.dao-switch-input');
    const noticeElm = vm.$el.querySelector('.dao-switch-notice');
    
    expect(vm.$el.querySelector('.dao-switch-checked')).to.exist;
    expect(noticeElm.querySelector('span').innerHTML).to.equal('是');
  });

  it('test "disabled"', () => {
    vm = createVue({
      template: `
         <dao-switch 
          :option="{ on: '是', off: '否' }"
          :with-notice="true"
          :disabled="disabled"
          v-model="readOnly.isChecked">
        </dao-switch>
      `,
      data() {
        return {
          disabled:true,
          readOnly: {
            isChecked: false,
          },
        };
      }, 
    }, true);

    const inputElm = vm.$el.querySelector('.dao-switch-input');
    const noticeElm = vm.$el.querySelector('.dao-switch-notice');
    
    expect(vm.$el.classList.contains('disabled')).to.equal(true);
    expect(inputElm.getAttribute('disabled')).to.equal('disabled');
    expect(noticeElm.querySelector('span').innerHTML).to.equal('否');
  });

  it('test "withNotice"', () => {
    vm = createVue({
      template: `
        <dao-switch 
          :option="{ on: '是', off: '否' }"
          :with-notice="false"
          v-model="withoutNotice.isChecked">
        </dao-switch>
      `,
      data() {
        return {
          withoutNotice: {
            isChecked: false,
          },
        };
      }, 
    }, true);
    expect(vm.$el.querySelector('.dao-switch-notice')).to.not.exist;
  });

  it('test "coreWidth"', () => {
    vm = createVue({
      template: `
        <dao-switch 
          :option="{ on: '是', off: '否' }"
          :with-notice="true"
          :core-width="superWide.coreWidth"
          v-model="superWide.isChecked">
        </dao-switch>
      `,
      data() {
        return {
          superWide: {
            isChecked: false,
            coreWidth:90,
          },
        };
      }, 
    }, true);
     expect(vm.$el.querySelector('.dao-switch-core').style.width).to.equal('90px');
  });

  it('test "event:change"', (done) => {
    vm = createVue({
      template: `
        <dao-switch 
          :option="{ on: '是', off: '否' }"
          :with-notice="true"
          @change="onChange()"
          v-model="event.isChecked">
        </dao-switch>
      `,
      data() {
        return {
          event: {
            isChecked: false,
          },
        };
      }, 
      methods: {
        onChange(data) {
          alert(data);
        },
      },
    }, true);
    const noticeElm = vm.$el.querySelector('.dao-switch-notice');
    const spy = sinon.spy(vm,'onChange');
    expect(noticeElm.querySelector('span').innerHTML).to.equal('否');

    vm.event.isChecked = true;
    vm.onChange(vm.event.isChecked);

    vm.$nextTick(() => {
      expect(spy.withArgs(true).calledOnce).to.be.true;
      expect(noticeElm.querySelector('span').innerHTML).to.equal('是');
      spy.restore();
      done();
    });
  });

});