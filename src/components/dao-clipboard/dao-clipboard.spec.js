/* eslint-disable */
import Vue from 'vue';

import DaoClipboard from './dao-clipboard.vue';

describe('Test DaoClipboard component', () => {
  it('should have a String type property "caption"', () => {
    expect(DaoClipboard.props.caption.type).to.equal(String);
  });
  it('should have a String type property "content"', () => {
    expect(DaoClipboard.props.content.type).to.equal(String);
  });
  it('should have a Function type property "onSuccess"', () => {
    expect(DaoClipboard.props.onSuccess.type).to.equal(Function);
  });
  it('should have a Function type property "onError"', () => {
    expect(DaoClipboard.props.onError.type).to.equal(Function);
  });

  it('caption can be string', () => {
    const caption = 'content to show';
    const Constructor = Vue.extend({
      template: `<div is="dao-clipboard" caption="${caption}" content="content to copy"></div>`,
    });
    const vm = new Constructor().$mount();
    const _caption = vm.$el.textContent;
    expect(_caption).to.equal(caption);
  });
});
