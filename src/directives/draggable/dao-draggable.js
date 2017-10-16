import dragging from './dragging';

// 绑定事件
function addEvents(el, binding) {
  const $el = el;
  const $binding = binding;

  // 绑定一个触发拖动的 mousedown 事件
  $el.addEventListener('mousedown', () => {
    // 先判断是否可拖拽
    const draggable = !$el.dragConfig.disabled;
    $el.setAttribute('draggable', draggable);
  });
}

// 将绑定值转换成新的对象
function dealWithBindingValue(binding) {
  const $binding = binding;
  const $value = $binding.value || {};
  const $modifies = $binding.modifies || {};

  return {
    disabled: $value.disabled || false,
    style: $value.style,
    class: $value.class,
    events: {
      onChange: $value.onChange || (() => {}),
    },
    clone: $modifies.clone,
  };
}

// 初始化指令
function init(el, binding) {
  const $el = el;
  const $binding = binding;

  // 处理绑定的值
  $el.dragConfig = dealWithBindingValue($binding);
  // 绑定事件
  addEvents($el, $binding);
}

// 绑定时
function bind($el, $binding) {
  // 初始化
  init($el, $binding);
}

// 更新时
function update(el, $binding) {
  const $el = el;
  $el.dragConfig = dealWithBindingValue($binding);
}

export default {
  bind,
  update,
};
