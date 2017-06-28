import { createVue, destroyVM } from '../util';

describe('clipboard', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  /**
   * 测试caption和content属性
   */
  it('create: caption and content', () => {
    const caption = 'copy to clipboard';
    const content = 'content to copy';
    vm = createVue({
      template: `
        <dao-clipboard 
            :caption="caption"
            :content="content"
        >
        </dao-clipboard>
      `,
      data() {
        return {
          caption,
          content,
        };
      },
    }, true);
    expect(vm.$el.textContent).to.equal(caption);
    expect(vm.$el.getAttribute('data-clipboard-text')).to.equal(content);
  });

  describe('callback function called correctly', () => {
    let stub;

    /**
     * 控制document.execCommand方法，在后续测试中启用和禁用copy command
     */
    before(() => {
      stub = sinon.stub(document, 'execCommand');
    });

    after(() => {
      stub.restore();
    });

    it('error callback', (done) => {
      const onError = sinon.spy();
      vm = createVue({
        template: `
        <dao-clipboard
            caption="caption"
            content="content"
            :on-error="onError"
        >
        </dao-clipboard>
      `,
        data() {
          return {
            onError,
          };
        },
      }, true);
      stub.returns(false); // 禁用copy command
      vm.$el.click();
      vm.$nextTick(() => {
        expect(onError.calledOnce).to.be.true;
        done();
      });
    });

    it('success callback', (done) => {
      const onSuccess = sinon.spy();
      vm = createVue({
        template: `
        <dao-clipboard
            caption="caption"
            content="content"
            :on-success="onSuccess"
        >
        </dao-clipboard>
      `,
        data() {
          return {
            onSuccess,
          };
        },
      }, true);
      stub.returns(true); // 启用copy command
      vm.$el.click();
      vm.$nextTick(() => {
        expect(onSuccess.calledOnce).to.be.true;
        done();
      });
    });
  });
});
