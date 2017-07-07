import Popper from 'popper.js';
import { getStyle } from '../../utils/assist';

const dropdownMargin = 8;

export default {
  props: {
    placement: {
      type: String,
      default: 'bottom',
    },
    boundariesPadding: {
      type: Number,
      default: 5,
    },
    reference: Object,
    popper: Object,
    offset: {
      default: 0,
    },
    transition: String,
    popperOptions: {
      type: Object,
      default() {
        return {
          gpuAcceleration: false,
          // boundariesElement: 'body',  // todo 暂时注释，发现在 vue 2 里方向暂时可以自动识别了，待验证(还是有问题的)
          modifiers: {
            preventOverflow: {
              enabled: false,
            },
            hide: {
              enabled: false,
            },
          },
        };
      },
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    popperCls: Array,
  },
  data() {
    return {
      visible: false,
      initClass: '',
    };
  },
  computed: {
    $popper() {
      const res = this.popper || this.$refs.popper;
      return '$el' in res ? res.$el : res; // 判断这个popper是纯dom还是vue组件
    },
    $reference() {
      const res = this.reference || this.$refs.reference;
      return '$el' in res ? res.$el : res;
    },
  },
  // TODO 几所所有组件都是使用自己的变量来控制popper的显示，并没有复用这个visible
  watch: {
    visible(val) {
      this.updatePopper();
      if (val) {
        this.$nextTick(() => this.updatePopper());
      } else {
        // this.doDestroy();
        this.$emit('popper-hide');
      }
      this.$emit('visible-change', val);
    },
    popperCls(val) {
      this.$popper.className = `${this.initClass} append-to-body ${this.popperCls ? this.popperCls.join(' ') : ''}`;
    },
  },
  methods: {
    createPopper() {
      if (!/^(top|bottom|left|right|auto)(-start|-end)?$/g.test(this.placement)) {
        return;
      }

      const options = this.popperOptions;
      const popper = this.$popper;
      const reference = this.$reference;

      if (!popper || !reference) return;

      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy();
      }

      options.placement = this.placement;
      options.offset = this.offset;
      options.onCreate = (data) => {
        this.resetTransformOrigin(data.instance);
        this.$nextTick(this.updatePopper);
        this.$emit('created', this);
      };
      options.onUpdate = (data) => {
        if (['DaoSelect', 'DaoAutocomplete'].includes(this.$options.name)) { // 这些组件需要单独设置宽度
          data.instance.popper.style.width = getStyle(reference, 'width');
        }
      };

      if (['DaoSelect', 'DaoAutocomplete'].includes(this.$options.name)) { // 这些组件需要单独设置宽度
        if (options.placement === 'bottom') {
          options.placement = 'bottom-start';
        } else if (options.placement === 'top') {
          options.placement = 'top-start';
        }
        popper.style.width = getStyle(reference, 'width');
        if (this.placement.indexOf('bottom') > -1) {
          popper.style['margin-top'] = `${dropdownMargin}px`;
        } else if (this.placement.indexOf('top') > -1) {
          popper.style['margin-bottom'] = `${dropdownMargin}px`;
        } else if (this.placement.indexOf('left') > -1) {
          popper.style['margin-right'] = `${dropdownMargin}px`;
        } else if (this.placement.indexOf('right') > -1) {
          popper.style['margin-left'] = `${dropdownMargin}px`;
        }
      }

      this.popperJS = new Popper(reference, popper, options);
      this.popperJS.update();
    },
    updatePopper() {
      this.popperJS ? this.popperJS.update() : this.createPopper();
    },
    doDestroy() {
      if (this.visible) return;
      if (this.popperJS) {
        this.popperJS.destroy();
        this.popperJS = null;
      }
    },
    destroyPopper() {
      if (this.popperJS) {
        this.resetTransformOrigin(this.popperJS);
      }
    },
    resetTransformOrigin(popper) {
      const placementMap = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
      const placement = popper.popper.getAttribute('x-placement').split('-')[0];
      const origin = placementMap[placement];
      popper.popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? `center ${origin}` : `${origin} center`;
    },
  },
  beforeDestroy() {
    if (this.appendToBody && this.$popper) {
      document.body.removeChild(this.$popper);
    }
    if (this.popperJS) {
      this.popperJS.destroy();
    }
  },
  mounted() {
    this.createPopper();
    this.initClass = this.$popper.className;
    if (this.appendToBody && this.$popper) {
      document.body.appendChild(this.$popper);
      this.$popper.className = `${this.initClass} append-to-body ${this.popperCls ? this.popperCls.join(' ') : ''}`;
      if (!this.$popper.style.zIndex) {
        this.$popper.style.zIndex = 9998; // TODO 这里是为了防止被dialog遮住，但是写死9998也会有一些问题。
      }
    }
  },
  created() {
    this.$on('update-popper', this.updatePopper);
    this.$on('destroy-popper', this.doDestroy);
  },
};
