<template>
  <div class="dao-editable-input">
    <dao-input
      v-bind="$props"
      v-model="currentValue"
      :disabled="isDisabled"
      :message="currentMessage"
      :status="currentStatus"
      @change="handleChange"
      @keyup.enter="save"
      @keyup.esc="cancel"
      >
      <template v-if="$slots.prepend" slot="prepend"><slot name="prepend"></slot></template>
      <template v-if="$slots.append" slot="append"><slot name="append"></slot></template>
      <template v-if="!$slots.prepend && !$slots.append" slot="button">
        <div class="edit-op">
          <div class="edit-op-toggle" v-show="!isEdit" @click="edit">
            <svg><use xlink:href="#icon_pencil"></use></svg><span class="text">更改</span>
          </div>
          <div class="edit-op-btn" v-show="isEdit">
            <button class="dao-btn blue" @click="save">{{ saveBtnContent }}</button>
            <button class="dao-btn ghost" @click="cancel">取消</button>
          </div>
        </div>
      </template>
    </dao-input>
    <div v-if="$slots.prepend || $slots.append" class="edit-op">
      <div class="edit-op-toggle" v-show="!isEdit" @click="edit">
        <svg><use xlink:href="#icon_pencil"></use></svg><span class="text">更改</span>
      </div>
      <div class="edit-op-btn" v-show="isEdit">
        <button class="dao-btn blue" @click="save">{{ saveBtnContent }}</button>
        <button class="dao-btn ghost" @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>
<script>
  import DaoInput from './dao-input.vue';

  export default {
    name: 'DaoEditableInput',
    extends: DaoInput,
    data() {
      return {
        currentValue: this.value,
        currentMessage: this.message,
        currentStatus: this.status,
        savedValue: this.value,
        isEdit: this.editState,
      };
    },
    props: {
      value: [String, Number],
      saveBtnContent: {
        type: String,
        default: '保存',
      },
      editState: Boolean,
      onCheck: {
        type: Function,
        default() {
          return true;
        },
      },
      onSuccess: {
        type: Function,
        default() {},
      },
    },
    computed: {
      isDisabled() {
        return !this.isEdit || this.disabled;
      },
    },
    watch: {
      value(val) {
        this.setCurrentValue(val);
      },
      message(val) {
        this.setCurrentMessage(val);
      },
      status(val) {
        this.setCurrentStatus(val);
      },
    },
    methods: {
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.currentValue = value;
      },
      setCurrentMessage(message) {
        if (message === this.currentMessage) return;
        this.currentMessage = message;
      },
      setCurrentStatus(status) {
        if (status === this.currentStatus) return;
        this.currentStatus = status;
      },
      handleChange(value) {
        this.$emit('input', value);
        this.setCurrentValue(value);
        this.$emit('change', value);
      },
      edit() {
        this.isEdit = true;
        this.$nextTick(() => {
          this.$el.querySelector('input').focus();
        });
      },
      save() {
        const result = this.onCheck();
        if (result) {
          this.clear();
          this.isEdit = false;
          this.savedValue = this.currentValue;
          this.onSuccess();
        }
      },
      cancel() {
        this.setCurrentValue(this.savedValue);
        this.clear();
        this.isEdit = false;
      },
      clear() {
        this.setCurrentMessage('');
        this.setCurrentStatus('');
      },
    },
  };
</script>

<style lang="scss">
@import "../dao-color.scss";
.dao-editable-input {
  display: inline-flex;
  .edit-op{
    line-height: 32px;
    padding-left: 20px;
    height: 32px;
    .edit-op-toggle{
      color: $grey-dark;
      cursor: pointer;
      svg {
        fill: $grey-dark;
        width: 16px;
        height: 16px;
        vertical-align: middle;
      }
      .text {
        margin-left: 5px;
        vertical-align: middle;
        line-height: 16px;
      }
    }
  }
}
</style>
