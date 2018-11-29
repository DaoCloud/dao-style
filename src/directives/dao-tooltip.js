/* eslint-disable */
import Popper from 'popper.js';
import getStyle from '../utils/get-style';
import '../components/dao-tooltip/dao-tooltip.scss';

const prefixCls = 'dao-tooltip';

// 通过指令参数设置popper的属性
function setProperties(el, binding) {
  el.popper._appendToBody = !(binding.value.appendToBody === false);
  if (binding.modifiers.always) {
    el.popper._always = binding.modifiers.always;
  }
  if (binding.modifiers.controlled) {
    el.popper._controlled = binding.modifiers.controlled;
  }
  if (binding.modifiers.ellipsis) {
    el.popper._ellipsis = binding.modifiers.ellipsis;
  }
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
  if (!popper.popper) return;
  const isShow = !popper._disabled && (popper._visible || popper._always) && (!popper._ellipsis || isEllipsisTooltip(el));

  /**
   *  如果appendToBody popper显示和隐藏是通过直接在document body上移除和添加该元素
   *  否则，设置popper元素的display属性
   */
  if (popper._appendToBody) {
    if (isShow && popper.popper.parentNode !== document.body) {
      document.body.appendChild(popper.popper);
    }
    if (!isShow && popper.popper.parentNode === document.body) {
      document.body.removeChild(popper.popper);
    }
  } else {
    popper.popper.style.display = isShow ? '' : 'none';
  }
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

// 添加事件
function addEvent(el) {
  el.addEventListener('mouseenter', handleShowPopper);
  el.addEventListener('mouseleave', handleClosePopper);
}

// 移除事件
function removeEvent(el) {
  el.removeEventListener('mouseenter', handleShowPopper);
  el.removeEventListener('mouseleave', handleClosePopper);
}

// 处理当元素文本没有被省略时，不显示 tooltip
function isEllipsisTooltip(el) {
  return (el.offsetWidth < el.scrollWidth);
}

export default {
  name: 'Tooltip',
  bind(el, binding, vnode) {
    const placement = binding.arg || 'top';

    // make wrapper
    const $popper = document.createElement('div');
    $popper.setAttribute('class', `${prefixCls}-popper`);

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

    if (binding.value.appendToBody === false) {
      $popper.style.display = 'none';
      el.appendChild($popper);
    } else {
      $popper.className += ` append-to-body ${binding.value.popperCls ? binding.value.popperCls.join(' ') : ''}`;
      $popper.style.zIndex = 9999; // TODO 这里是为了防止被dialog遮住，但是写死9999也会有一些问题。
    }

    const options = Object.assign({}, binding.value, { placement });

    el.$inner = $inner; // el.$inner will be used in handleShowPopper and handleClosePopper
    el.popper = new Popper(el, $popper, options);
    setProperties(el, binding);
    setAttributes($inner, el);
  },
  inserted(el, binding, vnode, oldVnode) {
    addEvent(el);
  },
  unbind(el, binding, vnode, oldVnode) {
    removeEvent(el);
    el.popper.destroy();
    if (binding.value.appendToBody === false) {
      if (el.popper.popper) el.removeChild(el.popper.popper);
    } else if (el.popper.popper && el.popper.popper.parentNode === document.body) {
      document.body.removeChild(el.popper.popper);
    }
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    setProperties(el, binding);
    setAttributes(el.$inner, el);
  },
};
