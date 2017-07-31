import { createVue, destroyVM } from '../util';

describe('Switch', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  /**
   * 测试组件接受参数的默认值
   */
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
    // 测试disabled的默认值是否为false
    expect(vm.$el.classList.contains('disabled')).to.equal(false);
    // 按钮未选择时，根据受value值影响的样式不存在，测试value的值为false
    expect(vm.$el.querySelector('.dao-switch-checked')).to.not.exist;
    expect(inputElm.getAttribute('name')).to.equal('DaoSwitch');
    // 测试显示提示文字
    expect(noticeElm.querySelector('span').innerHTML).to.equal('否');
    expect(vm.$el.querySelector('.dao-switch-core').style.width).to.equal('54px');
  });

  /**
   * 测试value属性
   */
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
    // 按钮已选择时，根据受value值影响的样式存在，测试value的值为true
    expect(vm.$el.querySelector('.dao-switch-checked')).to.exist;
    // 测试显示提示文字
    expect(noticeElm.querySelector('span').innerHTML).to.equal('是');
  });

  /**
   * 测试disabled属性
   */
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
    // 测试disabled值为true时，受disabled值影响的样式存在
    expect(vm.$el.classList.contains('disabled')).to.equal(true);
    expect(inputElm.getAttribute('disabled')).to.equal('disabled');
    expect(noticeElm.querySelector('span').innerHTML).to.equal('否');
  });

  /**
   * 测试withNotice属性
   */
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
    // 测试with-notice为false时，提示文字不存在
    expect(vm.$el.querySelector('.dao-switch-notice')).to.not.exist;
  });

  /**
   * 测试coreWidth属性
   */
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

  /**
   * 测试change事件
   */
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
      // 测试按钮状态变化时，onChange()接收一个value 的当前值作为参数执行一次
      expect(spy.withArgs(true).calledOnce).to.be.true;
      expect(noticeElm.querySelector('span').innerHTML).to.equal('是');
      spy.restore();
      done();
    });
  });

});

