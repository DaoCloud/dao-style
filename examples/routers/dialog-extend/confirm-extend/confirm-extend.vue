<template>
  <div>
     <dao-dialog
      :visible.sync="isShow"
      @before-close="onBeforeClose"
      @closed="onClosed"
      @before-open="onBeforeOpen"
      @opened="onOpened"
      containerClass="dialog-alert"
      :size="size"
      :header = "{ title: title }">
      <div class="dialog-alert-body">
        <div>{{content}}</div>
        <div v-if="type !== 'inputConfirm'" class="rows-wrap" :class="type">
          <div class="row" v-for="(row, index) in rows" :key="index">
            <div class="logo">
              <svg class="icon"><use v-bind="{ 'xlink:href': row.svg }"></use></svg>
            </div>
            <div class="desc">
              <div class="title">{{row.title}}</div>
              <div class="subtitle">{{row.subtitle}}</div>
            </div>
            <div class="checkbox">
              <div class="dao-checkbox">
                <label>
                  <input type="checkbox" v-model="row.checked">
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-alert-footer" :class="type">
        <div class="confirm-input" v-if="type !== 'checkboxConfirm'">
          <div class="title">请输入 {{confirmMessage}}</div>
         <dao-input block v-model="confirmInput" ></dao-input>
        </div>
        <div class="action-btn-group">
          <button class="dao-btn red" :disabled="!valid" @click="onConfirm">{{confirmText}}</button>
          <button class="dao-btn ghost" @click="onCancel">取消</button>
        </div>
      </div>
    </dao-dialog>
  </div>
</template>

<script>

  import dialogBase from '../dialog-base';

  const typeMap = {
    inputConfirm: 'inputConfirm',
    checkboxConfirm: 'checkboxConfirm',
    listConfirm: 'listConfirm',
  };

  export default {
    extends: dialogBase,
    props: {
      config: Object,
      type: {
        type: String,
        default: 'inputConfirm',
        validator(value) {
          return Object.values(typeMap).indexOf(value) !== -1;
        },
      },
      confirmMessage: {
        type: String,
        default: 'CONFIRM DELETE',
      },
      confirmText: {
        type: String,
        default: '确认',
      },
      content: String,
      rows: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {
        confirmInput: '',
      };
    },
    computed: {
      valid() {
        if (this.type === typeMap.checkboxConfirm) {
          return !!this.rows.find(row => row.checked);
        }
        return this.confirmInput === this.confirmMessage;
      },
    },
    methods: {
      onClosed() {
        this.confirmInput = '';
        this.rows.forEach((row) => {
          row.checked = false;
        });
        this.$emit('before-open');
      },
      onConfirm() {
        if (!this.valid) return;
        this.isShow = false;
        if (this.type === typeMap.checkboxConfirm) {
          this.$emit('confirm', this.rows.filter(row => row.checked));
        } else if (this.type === typeMap.listConfirm) {
          this.$emit('confirm', this.rows);
        } else {
          this.$emit('confirm');
        }
      },
    },
  };
</script>

<style lang='scss' scoped>

@import '../../../../src/components/dao-color.scss';

$disabled-color: generate-color($red, -1);
$rows-bg-color: #fbfcfd;
$row-height: 64px;
$logo-height-md: 36px;

.dialog-alert{
  &-body{
    padding: 20px;
    .rows-wrap{
      margin-top: 10px;
      border: 1px solid $white-dark;
      border-radius: 4px;
      padding: 0 10px;
      background-color: $rows-bg-color;
      .row{
        display: flex;
        .logo{
          margin-right: 6px;
          svg{
            fill: $white-dark;
          }
        }
        .desc{
          display: flex;
          flex: 1;
          justify-content: space-between;
          .title{
            font-size: 14px;
          }
          .subtitle{
            color: $grey-dark;
            font-size: 12px;
          }
        }
        .checkbox{
          display: flex;
          align-items: center;
        }
      }
      .row:not(:last-child){
        border-bottom: 1px solid $white-dark;
      }
      &.listConfirm{
        .row{
          height: 32px;
          line-height: 32px;
          .checkbox{
            display: none;
          }
        }
      }
      &.checkboxConfirm{
        .row{
          height: $row-height;
          line-height: $row-height;
          .logo svg{
            height: $logo-height-md;
            width: $logo-height-md;
          }
          .desc{
            padding: 14px 0px;
            line-height: 1;
            flex-direction: column;
          }
        }
      }
    }
  }
  
  &-footer{
    padding: 10px 0px;
    // checkbox confirm padding 比较特殊
    &.checkboxConfirm{
      padding: 5px 0;
    }
    .confirm-input{
      margin-top: -5px;
      .title{
        text-align: left;
        height: 14px;
        line-height: 14px;
      }
      .dao-input-container{
        padding: 10px 0;
      }
    }
    .action-btn-group{
      display: flex;
      justify-content: space-between;
      button{
        width: 50%;
      }
    }
  }
}
</style>