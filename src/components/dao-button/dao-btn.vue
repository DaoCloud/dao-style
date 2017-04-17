<!-- <template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
    <svg class="icon" v-if="icon && iconPosition === 'left'"><use :xlink:href="'#' + icon" v-if="icon"></use></svg>
    <span class="text" v-if="showSlot" ref="slot"><slot></slot></span>
    <svg class="icon" v-if="icon && iconPosition === 'right'"><use :xlink:href="'#' + icon" v-if="icon"></use></svg>
  </button>
</template>
<script>
  import { oneOf } from '../../utils/assist';
  const prefixCls = 'dao-btn';
  export default {
    name: 'Button',
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['blue', 'green', 'yellow', 'orange', 'red', 'ghost']);
        },
        default: 'ghost',
      },
      iconPosition: {
        validator (value) {
          return oneOf(value, ['left', 'right']);
        },
        default: 'left',
      },
      size: {
        type: String,
        default: '',
      },
      disabled: Boolean,
      icon: String,
    },
    data () {
      return {
        showSlot: true
      };
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          {
            [`${this.type}`]: !!this.type,
            ['btn-sm']: this.size === 'sm',
            ['has-icon compact']: this.showSlot && !!this.icon,
            ['dao-icon']: !this.showSlot && !!this.icon
          }
        ];
      }
    },
    methods: {
      handleClick (event) {
        this.$emit('click', event);
      }
    },
    mounted () {
      this.showSlot = !!this.$slots.default;
    }
  };
</script>
 -->
 