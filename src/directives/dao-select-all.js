import select from '../utils/select';

function handleClick(event) {
  select(event.target);
}

export default {
  bind(el) {
    el.addEventListener('click', handleClick);
  },
  unbind(el) {
    el.removeEventListener('click', handleClick);
  },
};
