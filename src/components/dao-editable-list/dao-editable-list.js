export default {
  name: 'DaoEditableList',
  props: ['data'],
  methods: {
    add() {
      this.$emit('add');
    },
    remove() {
      this.$emit('remove');
    },
  },
};
