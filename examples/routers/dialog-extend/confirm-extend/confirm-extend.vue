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
      <div class="body">
        <div>{{content}}</div>
        <div v-if="type !== 'inputConfirm'" class="rows-wrap" :class="type">
          <div class="row" v-for="row in rows">
            <div class="logo">
              <svg class="icon"><use v-bind="{ 'xlink:href': row.svg }"></use></svg>
            </div>
            <div class="desc">
              <div class="name">{{row.name}}</div>
              <div class="extra">{{row.extra}}</div>
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
      <div slot="footer" class="dialog-alert-footer">
        <div class="confirm-input" v-if="type !== 'checkboxConfirm'">
          <div class="title">请输入 CONFIRM DELETE</div>
         <dao-input block v-model="confirmInput" placeholder="请输入吧啦吧啦"></dao-input>
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

  const confirmInput = 'CONFIRM DELETE';
  
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
        return this.confirmInput === confirmInput;
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

.dialog-alert{
  .rows-wrap{
    margin-top: 10px;
    border: 1px solid $white-dark;
    border-radius: 4px;
    padding: 0 10px;
    background-color: #f5f7fa;
    .row{
      display: flex;
      padding-bottom: 4px;
      .logo{
        margin-right: 4px;
        svg{
          fill: $white-dark;
        }
      }
      .desc{
        display: flex;
        flex: 1;
        justify-content: space-between;
        .extra{
          color: $grey-dark;
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
        height: 64px;
        line-height: 64px;
        .logo svg{
          height: 40px;
          width: 40px;
        }
        .desc{
          padding: 6px 0px;
          line-height: 1;
          flex-direction: column;
          div{
            height: 26px;
            line-height: 26px;
          }
        }
      }
    }
  }
  .dialog-alert-footer{
    .confirm-input{
      .title{
        text-align: left;
      }
      .dao-input-container{
        padding: 8px 0;
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
.body{
  padding: 20px;
}
</style>