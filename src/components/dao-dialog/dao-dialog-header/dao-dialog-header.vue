<template>
  <div class="dao-dialog-header">
    <slot>
      <span :class="{ 'center': !configure.showClose}"> <slot name="title">{{configure.title}}</slot> </span>
      <div v-if="configure.showClose" class="dao-close" @click="onClose" >
        <svg preserveAspectRatio="xMidYMid" width="34" height="34" viewBox="0 0 34 34">
          <path d="M17.000,0.001 C7.612,0.001 0.001,7.612 0.001,17.000 C0.001,26.388 7.612,33.999 17.000,33.999 C26.388,33.999 33.999,26.388 33.999,17.000 C33.999,7.612 26.388,0.001 17.000,0.001 ZM24.166,21.666 C24.166,21.666 21.666,24.166 21.666,24.166 C21.666,24.166 17.000,19.500 17.000,19.500 C17.000,19.500 12.334,24.166 12.334,24.166 C12.334,24.166 9.834,21.666 9.834,21.666 C9.834,21.666 14.500,17.000 14.500,17.000 C14.500,17.000 9.834,12.335 9.834,12.335 C9.834,12.335 12.334,9.834 12.334,9.834 C12.334,9.834 17.000,14.500 17.000,14.500 C17.000,14.500 21.666,9.834 21.666,9.834 C21.666,9.834 24.166,12.335 24.166,12.335 C24.166,12.335 19.500,17.000 19.500,17.000 C19.500,17.000 24.166,21.666 24.166,21.666 Z" id="path-1" fill-rule="evenodd"/>
        </svg>
      </div>
    </slot>
  </div>
</template>
<script>
import { _merge, _clone } from '../../../utils/assist';

const defaultConfig = {
  title: '',
  showClose: false,
};

export default {
  name: 'DaoDialogHeader',
  props: {
    config: Object,
  },
  computed: {
    configure() {
      return _merge(_clone(defaultConfig), this.config);
    },
  },
  methods: {
    onConfirm() {
      this.$emit('confirm');
    },
    onClose() {
      this.$emit('close');
    },
  },
};
</script>
