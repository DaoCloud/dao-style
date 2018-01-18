import _map from 'lodash/map';
import _isString from 'lodash/isString';
import _filter from 'lodash/filter';
import _find from 'lodash/find';
import _isBoolean from 'lodash/isBoolean';
import _isFunction from 'lodash/isFunction';
import _isEqual from 'lodash/isEqual';
import _cloneDeep from 'lodash/cloneDeep';
import _some from 'lodash/some';
import _forEach from 'lodash/forEach';
import _orderBy from 'lodash/orderBy';
import _clone from 'lodash/clone';
import _includes from 'lodash/includes';
import _every from 'lodash/every';
import _isNumber from 'lodash/isNumber';
import _chunk from 'lodash/chunk';
import _get from 'lodash/get';
import _flatten from 'lodash/flatten';
import _toNumber from 'lodash/toNumber';
import _findIndex from 'lodash/findIndex';
/* eslint-disable */

// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

function camelcaseToHyphen(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// For Modal scrollBar hidden
let cached;
function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    const inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    const outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    const widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

// watch DOM change
const MutationObserver = window.MutationObserver ||
  window.WebKitMutationObserver || window.MozMutationObserver || false;

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}
// getStyle
function getStyle(element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
}

// firstUpperCase
function firstUpperCase(str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1);
}

// Warn
function warnProp(component, prop, correctType, wrongType) {
  correctType = firstUpperCase(correctType);
  wrongType = firstUpperCase(wrongType);
  console.error(`[iView warn]: Invalid prop: type check failed for prop ${prop}. Expected ${correctType}, got ${wrongType}. (found in component: ${component})`); // eslint-disable-line
}

function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

// scrollTop animation
function scrollTop(el, from = 0, to, duration = 500) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil(difference / duration * 50);

  function scroll(start, end, step) {
    if (start === end) return;

    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
}

// Find components upward
function findComponentUpward(content, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName];
  } else {
    componentNames = componentName;
  }

  let parent = content.$parent;
  let name = parent.$options.name;
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

// Find component downward
function findComponentDownward(content, componentName) {
  const childrens = content.$children;
  let children = null;

  if (childrens.length) {
    childrens.forEach(child => {
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
      }
    });

    for (let i = 0; i < childrens.length; i++) {
      const child = childrens[i];
      const name = child.$options.name;
      if (name === componentName) {
        children = child;
        break;
      } else {
        children = findComponentDownward(child, componentName);
        if (children) break;
      }
    }
  }
  return children;
}

// Find components downward
function findComponentsDownward(content, componentName, components = []) {
  const childrens = content.$children;

  if (childrens.length) {
    childrens.forEach(child => {
      const name = child.$options.name;
      const childs = child.$children;

      if (name === componentName) components.push(child);
      if (childs.length) {
        const findChilds = findComponentsDownward(child, componentName, components);
        if (findChilds) components.concat(findChilds);
      }
    });
  }
  return components;
}

// 通过获取选中元素参数以获取光标位置
function getSelectPosition(element) {
  const nullvalue = -1;
  let selectStart;
  let selectEnd;
  let position;
  let selectText;
  if (element.setSelectionRange) {
    selectStart = element.selectionStart;
    selectEnd = element.selectionEnd;
    if (selectStart === selectEnd) {
      position = element.selectionStart;
      selectStart = nullvalue;
      selectEnd = nullvalue;
    } else {
      position = nullvalue;
    }
    selectText = element.value.substring(selectStart, selectEnd);
  } else {
    const range = document.selection.createRange();
    selectText = range.text;
    range.moveStart('character', -element.value.length);
    position = range.text.length;
    selectStart = position - (selectText.length);
    selectEnd = selectStart + (selectText.length);
    if (selectStart !== selectEnd) {
      position = nullvalue;
    } else {
      selectStart = nullvalue;
      selectEnd = nullvalue;
    }
  }
  return {
    position,
    selectStart,
    selectEnd,
  };
}

// 无递归简单 merge
function simpleMerge(target, source) {
  const result = target || {};
  const tmpB = source || {};
  Object.keys(tmpB).forEach((key) => {
    result[key] = tmpB[key];
  });
  return result;
}

// 获取一段字符串的显示宽度,长度
function getTextSize(text, fontSize = '14px') {
  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.style.fontSize = fontSize;
  if (typeof span.textContent !== 'undefined') {
    span.textContent = text;
  } else {
    span.innerText = text;
  }
  document.body.appendChild(span);
  const result = {
    width: span.offsetWidth,
    height: span.offsetHeight,
  };
  document.body.removeChild(span);
  return result;
}

function getWindowWidthAndHeight() {
  const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
  const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  return {
    height,
    width,
  };
}

export {
  oneOf,
  camelcaseToHyphen,
  getScrollBarSize,
  MutationObserver,
  getStyle,
  getWindowWidthAndHeight,
  firstUpperCase,
  warnProp,
  deepCopy,
  scrollTop,
  findComponentUpward,
  findComponentDownward,
  findComponentsDownward,
  getSelectPosition,
  simpleMerge,
  getTextSize,
  _map,
  _isString,
  _filter,
  _find,
  _isBoolean,
  _isFunction,
  _cloneDeep,
  _isEqual,
  _some,
  _forEach,
  _orderBy,
  _clone,
  _includes,
  _every,
  _isNumber,
  _chunk,
  _get,
  _flatten,
  _toNumber,
  _findIndex,
};
