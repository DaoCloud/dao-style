import select from './select';
import assert from './assert';

function copySelect(container = document, content, callback = () => 0) {
  let succeed = true;
  try {
    const fakeEle = document.createElement('textarea');
    fakeEle.value = content;
    fakeEle.style.position = 'absolute';
    fakeEle.style.left = '-9999px';
    fakeEle.style.opacity = '0';
    container.appendChild(fakeEle);
    select(fakeEle);
    succeed = document.execCommand('copy');
    container.removeChild(fakeEle);
  } catch (err) {
    succeed = false;
  }
  assert.expect(succeed)
    .warn("your browser doesn't allow access to the clipboard via scripts");
  callback(succeed);
}

export default copySelect;
