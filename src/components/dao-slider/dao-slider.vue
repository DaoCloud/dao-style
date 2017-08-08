<template>
  <div class="dao-slider">
    Dao Slider
    <div
      class="dao-slider-track"
      @click.prevent="onHandleClick"
      ref="track">
      <!-- stops -->
      <div
        v-if="showStops"
        class="dao-slider-stop-wrap"
        :class="{'disabled-fill': disabled}">
        <div
          class="dao-slider-stop"
          v-show="step"
          :style="{left: stop * 100 + '%'}"
          v-for="stop in stops">
        </div>
      </div>
      <!-- fill track -->
      <div
        class="dao-slider-track__fill"
        :class="{'disabled-fill': disabled}"
        :style="{width: curtPos * 100 + '%'}"
        >
        <div
          class="dao-slider-track__flag"
          @mousedown.prevent="onHandleMouseDown"
          >
        </div>
      </div>
      <!-- tips -->
      <div
        v-if="showTips"
        class="dao-slider-tip-wrap">
        <div
          class="dao-slider-tip"
          v-show="step"
          :style="{left: stop * 100 + '%'}"
          v-for="stop in stops">
          {{updateNewVal(stop)}}
        </div>
      </div>
    </div>
    <div class="show">
      Inside Pos: {{this.curtPos}}<br/>
      Inside Value: {{this.value}}
    </div>
  </div>
</template>
<script>
  import { getStyle } from '../../utils/assist';

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

        for (let i = 1; i < stopCount;) {
          result.push(i * stepWidth);
          i += 1;
        }
        result.push(1);
        return result;
      },
      helfStepWidth() {
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
        console.log('onHandleMouseDown');
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
        console.log('drag end');
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
      getCurtPosInSteps(newPos) {
        if (!this.stops || !this.step) return;
        const stopsLen = this.stops.length;
        // 倒数第一个 stop 与倒数第二个 stop 之间的距离不一定是 this.helfStepWidth
        if (newPos > this.stops[stopsLen - 2]) {
          this.curtPos = (newPos <= this.stops[stopsLen - 2] + this.lastHalf) ? this.stops[stopsLen - 2] : this.stops[stopsLen - 1];
        } else {
          const tempNewPos = this.stops.find(stop => ((stop - this.helfStepWidth) <= newPos) && (newPos < (stop + this.helfStepWidth)));
          this.curtPos = tempNewPos || this.curtPos;
        }
        this.startX = this.baseStart + (this.curtPos * this.sliderWidth);
        console.log('getCurtPosInSteps');
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
        return parseInt(newVal.toFixed(1), 10);
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
    },
    mounted() {
      this.sliderWidth = parseInt(getStyle(this.$refs.track, 'width'), 10);
      this.$nextTick(() => {
        this.curtPos = this.updateCurPosition(this.value);
        if (this.step && this.value) {
          this.getCurtPosInSteps(this.curtPos);
        }

        this.baseStart = this.$refs.track.offsetLeft;
        this.startX = this.baseStart + (this.curtPos * this.sliderWidth);
      });
    },
  };
</script>
<style lang="scss">
  @import "./dao-slider.scss";
</style>
