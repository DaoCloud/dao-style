<template>
  <div class="dao-slider">
    <div class="dao-slider-track" @click.prevent="onHandleClick" ref="track">
      <!-- stops -->
      <dao-slider-stops v-if="showStops && step" :stops="stops" :disabled="disabled">
      </dao-slider-stops>
      <!-- fill track -->
      <div :class="['dao-slider-track__fill', {'disabled-fill': disabled}]"
        :style="{width: curtPos * 100 + '%'}">
        <div class="dao-slider-track__flag" @mousedown.prevent="onHandleMouseDown">
        </div>
      </div>
      <!-- tips -->
      <dao-slider-tips v-if="step && showTips" :stops="stops" :max="max" :min="min">
      </dao-slider-tips>
    </div>
  </div>
</template>
<script>
  import {
    _find,
    _isEqual,
  } from '../../utils/assist';
  import getStyle from '../../utils/get-style';
  import DaoSliderTips from './dao-slider-tips/index.vue';
  import DaoSliderStops from './dao-slider-stops/index.vue';

  export default {
    name: 'DaoSlider',
    props: {
      min: {
        type: Number,
        required: false,
        default: 0,
      },
      max: {
        type: Number,
        required: false,
        default: 10,
      },
      step: {
        type: Number,
        required: false,
        validator(val) {
          return val > 0;
        },
      },
      value: {
        type: Number,
        default: 0,
      },
      showStops: {
        type: Boolean,
        default: false,
      },
      showTips: {
        type: Boolean,
        default: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isDragging: false,
        curtPos: 0,
        sliderWidth: 0,
        startX: null,
        baseStart: null,
        watchStops: [], // 专门用来 watch 的 stops的一个副本
      };
    },
    computed: {
      stops() {
        if (!this.step) {
          return false;
        }

        const stopCount = (this.max - this.min) / this.step;
        const stepWidth = 1 / stopCount;
        const result = [0];

        for (let i = 1; i < stopCount; i += 1) {
          result.push(i * stepWidth);
        }

        result.push(1);
        if (!_isEqual(result, this.watchStops)) {
          this.watchStops = result;
        }
        return result;
      },
      halfStepWidth() {
        if (!this.step) {
          return false;
        }
        return this.step / (this.max - this.min) / 2;
      },
      lastHalf() {
        if (!this.step) {
          return false;
        }
        const stopsLen = this.stops.length;
        return (this.stops[stopsLen - 1] - this.stops[stopsLen - 2]) / 2;
      },
    },
    methods: {
      // drag
      onHandleMouseDown(e) {
        if (this.disabled) return;
        this.onHandleDragStart(e);
        window.addEventListener('mousemove', this.onHandleDragging);
        window.addEventListener('mouseup', this.onHandleDragEnd);
      },
      onHandleDragStart(e) {
        this.isDragging = true;
        this.startX = e.clientX;
      },
      onHandleDragging(e) {
        // 右滑 > 0
        const diff = e.clientX - this.startX;

        if (this.curtPos >= 1 && diff > 0) {
          this.curtPos = 1;
          return;
        }
        if (this.curtPos < 0 && diff < 0) {
          this.curtPos = 0;
          return;
        }
        this.curtPos = this.getCurPos(e.clientX);
        this.startX = e.clientX;
      },

      onHandleDragEnd(e) {
        this.isDragging = false;

        // 没有 step 时
        // 使用 drag 来改变值的时候，
        // value 在 onHandleDragging 的时候就会改变，
        // 所以无法在这里调用 value watcher
        // 所以必须在此调用 $emit('onChange', newVal)
        if (!this.step) {
          this.startX = e.clientX;
          this.$emit('onChange', this.value);
        } else {
          // 有 step 的时候，end 的时候调用 this.onHandleClick, 来确定 curtValue
          this.onHandleClick(e);
        }
        window.removeEventListener('mousemove', this.onHandleDragging);
        window.removeEventListener('mouseup', this.onHandleDragEnd);
      },
      // track 的 click 事件
      onHandleClick(e) {
        if (this.disabled) return;
        const newPos = this.getCurPos(e.clientX);
        if (newPos < 0 || newPos > 1) return;

        if (this.step && this.stops) {
          this.getCurtPosInSteps(newPos);
        } else {
          this.curtPos = newPos;
          this.startX = e.clientX;
        }
      },
      getCurtPosInSteps(newPos, stops = this.stops) {
        if (!stops || !this.step) return;
        const stopsLen = stops.length;
        // 倒数第一个 stop 与倒数第二个 stop 之间的距离不一定是 this.halfStepWidth
        if (newPos > stops[stopsLen - 2]) {
          this.curtPos = (newPos <= stops[stopsLen - 2] + this.lastHalf) ?
          stops[stopsLen - 2] : stops[stopsLen - 1];
        } else {
          const tempNewPos = _find(stops, stop => ((stop - this.halfStepWidth) <= newPos) &&
            (newPos < (stop + this.halfStepWidth)));
          this.curtPos = tempNewPos || this.curtPos;
        }
        this.startX = this.baseStart + (this.curtPos * this.sliderWidth);
      },
      getCurPos(curClientX) {
        return (curClientX - this.baseStart) / this.sliderWidth;
      },
      // value -> position
      updateCurPosition(val) {
        const newPos = (val - this.min) / (this.max - this.min);
        return (newPos >= 0 && newPos <= 1) ? newPos : null;
      },
      // position -> value
      updateNewVal(pos) {
        const newVal = (pos * (this.max - this.min)) + this.min;
        return parseInt(newVal, 10);
      },
    },
    watch: {
      curtPos(newVal) {
        if (newVal >= 0 && newVal <= 1) {
          this.$emit('input', this.updateNewVal(newVal));
        }
      },
      value(newVal) {
        if (newVal !== 0 && !newVal) {
          return;
        }
        const newPosition = this.updateCurPosition(newVal);
        if (newPosition !== this.curtPos) {
          this.curtPos = newPosition;
        }
        if (!this.isDragging) {
          this.$emit('onChange', newVal);
        }
      },
      watchStops(newV) {
        this.getCurtPosInSteps(this.curtPos, newV);
      },
    },
    mounted() {
      this.sliderWidth = parseInt(getStyle(this.$refs.track, 'width'), 10);
      this.$nextTick(() => {
        this.curtPos = this.updateCurPosition(this.value);
        if (this.step && this.value) {
          this.getCurtPosInSteps(this.curtPos);
        }

        this.baseStart = this.$refs.track.getBoundingClientRect().left + window.pageXOffset;
        this.startX = this.baseStart + (this.curtPos * this.sliderWidth);
      });
    },
    components: {
      DaoSliderTips,
      DaoSliderStops,
    },
  };
</script>
<style lang="scss">
  @import "./dao-slider.scss";
</style>
