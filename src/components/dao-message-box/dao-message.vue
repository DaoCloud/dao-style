<template>
  <dao-dialog
    class="dao-alert"
    @closed="onClosed"
    :size="size"
    :header="header"
    :visible.sync="isShow">
    <div v-html="text" class="dialog-body">
    </div>
    <div slot="footer">
      <div class="alert-dialog-footer">
        <div class="checkbox-wrap">
          <div class="dao-checkbox" v-show="checkboxText">
            <label>
              <input type="checkbox" v-model="checkboxChecked">
              {{checkboxText}}
            </label>
          </div>
        </div>
        <div>
          <button class="dao-btn ghost" @click="onCancel">{{ cancelText }}</button>
          <button :class="confirmClass" @click="onConfirm">{{ confirmText }}</button>
        </div>
      </div>
      
    </div>
  </dao-dialog>
</template>

<script>
  import DaoDialog from '../dao-dialog';

  export default {
    data() {
      return {
        isShow: this.visible,
        size: {
          height: 'auto',
          width: '600px',
        },
        checkboxChecked: false,
      };
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        default: '',
      },
      text: {
        type: String,
        default: '',
      },
      theme: {
        type: String,
        default: 'blue',
      },
      confirmText: {
        type: String,
        default: '确认',
      },
      confirm: {
        type: Function,
        default: () => {},
      },
      cancelText: {
        type: String,
        default: '取消',
      },
      checkboxText: String,
      cancel: {
        type: Function,
        default: () => {},
      },
    },
    created() {
      this.$on('visible', (newVal) => {
        this.visible = newVal;
      });
    },
    computed: {
      header() {
        return {
          title: this.title,
        };
      },
      dialogConfig() {
        return {
          type: 'normal',
          title: this.title,
          showHeader: true,
          showHeaderClose: false,
          showFooter: true,
          closeOnClickOutside: false,
          closeOnPressEscape: false,
        };
      },
      confirmClass() {
        const result = {
          'dao-btn': true,
        };
        if (this.theme) {
          result[this.theme] = true;
        }
        return result;
      },
    },
    methods: {
      onConfirm() {
        this.$emit('confirm', {
          checked: this.checkboxChecked,
        });
        this.visible = false;
      },
      onCancel() {
        this.$emit('cancel');
        this.visible = false;
      },
      onClosed() {
        this.$emit('close');
      },
    },
    component: {
      DaoDialog,
    },
    watch: {
      visible(newVal) {
        this.isShow = newVal;
      },
    },
  };
</script>

<style lang="scss">
  .dao-alert{
    .dialog-body {
      padding: 20px;
    }
    .alert-dialog-footer{
      display: flex;
      justify-content: space-between;
      .checkbox-wrap{
        display: flex;
        align-items: center;
      }
    }
  }
  
</style>
  