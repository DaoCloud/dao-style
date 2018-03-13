import { _some } from '../../utils/assist';

export default {
  name: 'DaoEditableList',
  props: ['data'],
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    add() {
      this.$emit('add');
    },
    remove() {
      this.$emit('remove');
    },
  },
  updated() {
    this.disabled = !this.$slots.list
     || !_some(this.$slots.list, vNode => vNode.data.class.active);
  },
};
