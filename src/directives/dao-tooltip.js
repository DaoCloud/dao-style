import Popper from 'popper.js';

const prefixCls = 'dao-tooltip';

// 通过指令参数设置popper的属性
function setProperties(el, binding) {
  el.popper._always = binding.modifiers.always;
  el.popper._controlled = binding.modifiers.controlled;
  if (typeof binding.value === 'object') {
    el.popper._content = binding.value.content || '';
    el.popper._delay = binding.value.delay;
    el.popper._disabled = binding.value.disabled;
  } else if (typeof binding.value === 'string') {
    el.popper._content = binding.value;
  } else {
    el.popper._content = binding.expression;
  }
}

// 设置innerhtml并计算popper的display
function setAttributes($inner, el) {
  const popper = el.popper;
  $inner.innerHTML = el.popper._content;
  popper.popper.style.display =
    (!popper._disabled && (popper._visible || popper._always))
    ? ''
    : 'none';
}

function handleShowPopper(e) {
  const el = e.currentTarget;
  el.popper._timer = setTimeout(() => {
    el.popper._visible = true;
    setAttributes(el.$inner, el);
    el.popper.update();
  }, el.popper._delay || 0);
}

function handleClosePopper(e) {
  const el = e.currentTarget;
  el.popper._timer && clearTimeout(el.popper._timer);
  if (!el.popper._controlled) {
    el.popper._visible = false;
    setAttributes(el.$inner, el);
    el.popper.update();
  }
}

export default {
  name: 'Tooltip',
  bind(el, binding, vnode) {
    const { start = false, end = false } = binding.modifiers;
    let modifier = '';
    if (start) {
      modifier = '-start';
    } else if (end) {
      modifier = '-end';
    }
    const placement = (binding.arg || 'auto') + modifier;

    // make wrapper
    const $popper = document.createElement('div');
    $popper.setAttribute('class', `${prefixCls}-popper`);
    $popper.style.display = 'none';

    // make container
    const $content = document.createElement('div');
    $content.setAttribute('class', `${prefixCls}-content`);

    // make arrow
    const $arrow = document.createElement('div');
    $arrow.setAttribute('class', `${prefixCls}-arrow`);
    $content.appendChild($arrow);

    // make inner content
    const $inner = document.createElement('div');
    $inner.setAttribute('class', `${prefixCls}-inner`);
    $content.appendChild($inner);
    $popper.appendChild($content);

    el.appendChild($popper);

    const options = Object.assign({}, binding.value, { placement });

    el.$inner = $inner; // el.$inner will be used in handleShowPopper and handleClosePopper
    el.popper = new Popper(el, $popper, options);
    setProperties(el, binding);
    setAttributes($inner, el);
  },
  inserted(el, binding, vnode, oldVnode) {
    el.addEventListener('mouseenter', handleShowPopper);
    el.addEventListener('mouseleave', handleClosePopper);
  },
  unbind(el, biding, vnode, oldVnode) {
    el.removeEventListener('mouseenter', handleShowPopper);
    el.removeEventListener('mouseleave', handleClosePopper);
    el.popper.destroy();
    el.removeChild(el.popper.popper);
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    setProperties(el, binding);
  },
};

