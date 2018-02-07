<template>
  <div class="dao-file-input">
    <div class="input-wrap selection" v-if="!file" @click='onClick'>
      <span class="flex-content">{{placeholder}}</span>
      <button class="dao-btn btn-sm blue">{{btnText}}</button>
    </div>
    <div class="input-wrap selected" v-if="file">
      <span class="flex-content">
        <svg class="icon">
          <use xlink:href="#icon_file-text"></use>
        </svg>
      </span>
      <span class="flex-content file-name-wrap">
        <div>{{file.name}}</div>
      </span>
      <span class="flex-content" v-if="!disabled">
        <svg class="icon operate" @click="clear">
          <use xlink:href="#icon_close-circled"></use>
        </svg>
      </span>
    </div>
    <input type="file" ref="input" :accept="accept" @change="onChange">
  </div>
</template>
<script>
  import { _get } from '../../utils/assist';

  export default {
    name: 'DaoFileInput',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      placeholder: {
        type: String,
        default: '',
      },
      btnText: {
        type: String,
        default: '浏览',
      },
      accept: {
        type: String,
        default: '*',
      },
      value: File,
    },
    data() {
      return {
        file: null,
      };
    },
    methods: {
      onClick() {
        this.$refs.input.click();
      },
      onChange(event) {
        this.file = _get(event, 'target.files[0]', null);
        this.updateModel();
      },
      clear() {
        this.file = null;
        this.updateModel();
      },
      updateModel() {
        this.$emit('input', this.file);
        this.$emit('change', this.file);
      },
    },
  };
</script>

<style lang="scss" src="./dao-file-input.scss">
</style>
