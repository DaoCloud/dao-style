import _ from 'lodash';

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
     || !_.some(this.$slots.list, vNode => vNode.data.class.active);
  },
};
