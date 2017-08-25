import 'babel-polyfill';
import { createVue, destroyVM, fireEvent } from '../util';

describe('Select', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    const options = [
      {
        value: '1',
        label: 'selectLabel01',
        disabled: false,
      }, {
        value: '2',
        label: 'selectLabel02',
        disabled: true,
      }, {
        label: 'selectLabel03',
      }, {
        disabled: true,
        label: 'selectLabel04',
      }];
    vm = createVue({
      template: `
      <dao-select 
        v-model="selected"
        placeholder="请选择"
        menu-class="select-test">
        <dao-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label" :disabled="item.disabled">
        </dao-option>
      </dao-select>
      `,
      data() {
        return {
          options,
          selected: 1,
        };
      },
    }, true);

    const placeholderElm = vm.$el.querySelector('.placeholder');
    const menuClassElm = vm.$el.querySelector('.select-test');
    const optionItemsElm = menuClassElm.querySelectorAll('.dao-option-item');
    expect(placeholderElm.textContent).to.equal('请选择');

    for (const [index, item] of optionItemsElm.entries()) {
      item.click();

      if (options[index].disabled === true) {
        expect(item.classList.contains('disabled')).to.equal(true);
      } else if (options[index].disabled === false || options[index].disabled === undefined) {
        expect(item.classList.contains('disabled')).to.be.false;
        expect(vm.$data.selected).to.equal(options[index].value);
      }
      expect(item.querySelector('.dao-option-item > span').textContent).to.equal(options[index].label);
    }
  });

  it('no data text', (done) => {
    vm = createVue({
      template: `
      <dao-select 
        v-model="selected"
        no-data-text="无选项">
        <dao-option-group>
        </dao-option-group>
      </dao-select>
      `,
      data() {
        return {
          options: [],
          selected: null,
        };
      },
    }, true);

    vm.$nextTick(() => {
      const noOptionElm = vm.$el.querySelector('.dao-select-noOption');
      expect(noOptionElm.textContent).to.equal('无选项');
      done();
    });
  });

  it('loding', (done) => {
    vm = createVue({
      template: `
      <dao-select v-model="loading" placeholder="加载中的下拉框" :loading="lodingState" loading-text="加载中">
        <dao-option-group>
          <dao-option :value="1" label="Hello"></dao-option>
        </dao-option-group>
      </dao-select>  
      `,
      data() {
        return {
          loading: null,
          lodingState: true,
        };
      },
    }, true);
    const daoSelectMain = vm.$el.querySelector('.dao-select-main');
    const switchLoding = vm.$el.querySelector('.switch-loading');
    expect(daoSelectMain.classList.contains('disabled')).to.be.true;
    expect(switchLoding.getAttribute('style')).to.equal(null);
    expect(switchLoding.querySelector('.switch-loading > span').textContent).to.equal('加载中');
    vm.$data.lodingState = false;
    vm.$nextTick(() => {
      expect(daoSelectMain.classList.contains('disabled')).to.be.false;
      expect(switchLoding.getAttribute('style')).to.equal('display: none;');
      done();
    });
  });

  it('disable', (done) => {
    vm = createVue({
      template: `
      <dao-select v-model="disabled" placeholder="禁用的下拉框" :disabled="disableState">
      </dao-select>
      `,
      data() {
        return {
          disabled: null,
          disableState: true,
        };
      },
    }, true);
    const selectMainElm = vm.$el.querySelector('.dao-select-main');
    expect(selectMainElm.classList.contains('disabled')).to.be.true;
    vm.$data.disableState = false;
    vm.$nextTick(() => {
      expect(selectMainElm.classList.contains('disabled')).to.be.false;
      done();
    });
  });

  it('small select', () => {
    vm = createVue({
      template: `
      <dao-select v-model="small" placeholder="一个小型下拉框" size="sm">
        <dao-option :value="1">option1</dao-option>
        <dao-option :value="2">option2</dao-option>
        <dao-option :value="3">option3</dao-option>
        <dao-option :value="4">option4</dao-option>
      </dao-select>
      `,
      data() {
        return {
          small: null,
        };
      },
    }, true);
    const elmStyle = window.getComputedStyle(vm.$el);
    const elmHeight = elmStyle.height;
    const elmWidth = elmStyle.width;
    expect(elmHeight).to.equal('26px');
    expect(elmWidth).to.equal('200px');
  });

  it('select with search', (done) => {
    vm = createVue({
      template: `
      <dao-select v-model="search" :with-search="true" search-placeholder="搜索条件在这里" no-data-text="无选项" no-match-text="无匹配选项">
        <dao-option :value="1" label="苹果"></dao-option>
        <dao-option :value="2" label="香蕉"></dao-option>
        <dao-option :value="2" label="梨"></dao-option>
      </dao-select>
      `,
      data() {
        return {
          search: '',
        };
      },

    }, true);
    const inputElm = vm.$el.querySelector('.dao-control');
    expect(inputElm.getAttribute('placeholder')).to.equal('搜索条件在这里');
    inputElm.value = '苹';
    fireEvent(inputElm, 'input');
    vm.$nextTick(() => {
      const daoOptionItemElms = vm.$el.querySelectorAll('.dao-option-item');
      for (const item of daoOptionItemElms) {
        const content = item.querySelector('span').textContent;
        if (content.includes('苹')) {
          expect(item.getAttribute('style')).to.equal(null);
        } else {
          expect(item.getAttribute('style')).to.equal('display: none;');
        }
      }
      done();
    });
  });

  it('search with method', (done) => {
    vm = createVue({
      template: `
      <dao-select v-model="search" :with-search="true" search-placeholder="搜索条件在这里" no-data-text="无选项" :search-method="searchMethod" no-match-text="无匹配选项">
        <dao-option :value="1" label="苹果"></dao-option>
        <dao-option :value="2" label="香蕉"></dao-option>
        <dao-option :value="3" label="梨"></dao-option>
      </dao-select>
      `,
      data() {
        return {
          search: '',
        };
      },
      methods: {
        searchMethod() {
          return false;
        },
      },
    }, true);
    const inputElm = vm.$el.querySelector('.dao-control');
    inputElm.value = '苹果';
    fireEvent(inputElm, 'input');
    vm.$nextTick(() => {
      const daoOptionItemElms = vm.$el.querySelectorAll('.dao-option-item');
      for (const item of daoOptionItemElms) {
        expect(item.getAttribute('style')).to.equal('display: none;');
      }
      done();
    });
  });

  it('select with async', (done) => {
    const options = [
      {
        value: 1,
        text: '选项一',
      }, {
        value: 2,
        text: '选项二',
      }, {
        value: 3,
        text: '选项三',
      }];
    vm = createVue({
      template: `
      <dao-select v-model="asynchronous" placeholder="异步获取数据下拉框" :async="asyncTest" class="async">
        <dao-option v-for="option in options" :key="option.value" :value="option.value" :label="option.text">{{ option.text }}</dao-option>    
      </dao-select>
      `,
      data() {
        return {
          asynchronous: '',
          options: [],
        };
      },
      methods: {
        asyncTest() {
          const p = new Promise((res, rej) => {
            if (true) {
              setTimeout(() => {
                res(options);
              }, 100);
            } else {
              rej(0);
            }
          });
          return p.then((res) => {
            this.options = res;
          });
        },
      },
    }, true);
    const inputElm = vm.$el.querySelector('.async .dao-select-main');
    fireEvent(inputElm, 'click');
    setTimeout(() => {
      vm.$nextTick(() => {
        const optionItemElm = vm.$el.querySelectorAll('.dao-option-item');
        for (const [index, item] of optionItemElm.entries()) {
          expect(item.querySelector('.dao-option-item > span').textContent).to.equal(options[index].text);
        }
        done();
      });
    }, 200);
  });


  it('select with tab', (done) => {
    vm = createVue({
      template: `
      <dao-select v-model="tab" placeholder="带标签下拉框" :with-tab="true">
        <dao-tab direction="left" ref="tab">
          <dao-tab-item heading="标题1">
            <dao-option-group label="111">
              <dao-option :value="1">111_1</dao-option>
              <dao-option :value="2">111_2</dao-option>
              <dao-option :value="3">111_3</dao-option>
            </dao-option-group>
          </dao-tab-item>
          <dao-tab-item heading="标题2">
            <dao-option-group label="222"></dao-option-group>
          </dao-tab-item>
        </dao-tab>
      </dao-select>
      `,
      data() {
        return {
          activeName: '',
          tab: null,
        };
      },
    }, true);
    vm.$nextTick(() => {
      const tabItems = vm.$refs.tab.$el.querySelectorAll('.dao-tab-nav-item');
      expect(tabItems[0].textContent.indexOf('标题1') > -1).to.be.true;
      expect(tabItems[1].textContent.indexOf('标题2') > -1).to.be.true;
      done();
    }, true);
  });

  it('select option slot', () => {
    vm = createVue({
      template: `
        <dao-select 
          v-model="selected"
          no-data-text="无选项">
          <dao-option>
            <span class='option-slot'>这里可能是一个页面标题</span>
          </dao-option>
        </dao-select>
      `,
      data() {
        return {
          selected: '',
        };
      },
    }, true);
    const slotElm = vm.$el.querySelector('.option-slot');
    expect(slotElm.textContent).to.equal('这里可能是一个页面标题');
  });
  describe('Select Events', () => {
    it('select change event', (done) => {
      vm = createVue({
        template: `
          <dao-select v-model="select" placeholder="这是一个下拉框" @change='changeEvent'>
            <dao-option :value="1">option1</dao-option>
            <dao-option :value="2">option2</dao-option>
          </dao-select>
        `,
        data() {
          return {
            select: '',
            currentValue: '',
          };
        },
        methods: {
          changeEvent(val) {
            this.currentValue = val;
          },
        },
      });
      vm.$nextTick(() => {
        const optionItems = vm.$el.querySelectorAll('.dao-option-item');
        fireEvent(optionItems[0], 'click');
        expect(vm.$data.currentValue).to.equal(1);
        fireEvent(optionItems[1], 'click');
        expect(vm.$data.currentValue).to.equal(2);
        done();
      });
    });

    it('select visible event', (done) => {
      vm = createVue({
        template: `
          <dao-select v-model="select" placeholder="这是一个下拉框" @visible-change='changeEvent'>
            <dao-option :value="1">option1</dao-option>
            <dao-option :value="2">option2</dao-option>
          </dao-select>
        `,
        data() {
          return {
            select: '',
            visible: null,
          };
        },
        methods: {
          changeEvent(val) {
            this.visible = val;
          },
        },
      });
      const selectElm = vm.$el.querySelector('.dao-select-main');
      fireEvent(selectElm, 'click');
      vm.$nextTick(() => {
        expect(vm.$data.visible).to.be.true;
        fireEvent(selectElm, 'click');
        vm.$nextTick(() => {
          expect(vm.$data.visible).to.be.false;
          done();
        });
      });
    });

    it('select button event', (done) => {
      vm = createVue({
        template: `
        <dao-select v-model="button" placeholder="带按钮下拉框" :with-btn="true" btn-content="😆你好" @btn-event="buttonEvent">
          <dao-option-group>
            <dao-option :value="1" label="Hello"></dao-option>
            <dao-option :value="2" label="Aloha"></dao-option>
          </dao-option-group>
        </dao-select>
        `,
        data() {
          return {
            button: '',
            buttonClicked: false,
          };
        },
        methods: {
          buttonEvent() {
            this.buttonClicked = true;
          },
        },
      }, true);
      expect(vm.$data.buttonClicked).to.be.false;
      const button = vm.$el.querySelector('.dao-select-btn');
      fireEvent(button, 'click');
      vm.$nextTick(() => {
        expect(vm.$data.buttonClicked).to.be.true;
        done();
      });
    });
  });
});
