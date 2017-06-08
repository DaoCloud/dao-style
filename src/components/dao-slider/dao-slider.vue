<template>
  <div class="dao-slider">
    Dao Slider
    <div
      class="dao-slider-track"
      @click.prevent="onHandleClick"
      ref="track">
      <div
        class="dao-slider-track__fill"
        :style="{width: curtPos*100 + '%'}"
        >
        <div
          class="dao-slider-track__flag"
          @mousedown.prevent="onHandleMouseDown"
          >
        </div>
      </div>
      <div
        class="dao-slider-stop"
        v-show="step"
        :style="{left: stop * 100 + '%'}"
        v-for="stop in stops">
      </div>
      <div class="dao-slider-tip-wrap">
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
      <!-- Inside Value: {{this.value.toFixed(1)}} -->
    </div>
  </div>
</template>
<script>
  import { getStyle } from '../../utils/assist';

  export default {
    name: 'DaoSlider',
    props: {
      range: {
        type: Array,
        default: [0, 10],
        required: true,
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
      onChange: Function,
    },
    data() {
      return {
        isDragging: false,
        curtPos: 0,
        sliderWidth: 0,
        startX: null,
        trackLeft: null,
      };
    },
    computed: {
      stops() {
        if (!this.step) {
          return false;
        }

        const stopCount = (this.range[1] - this.range[0]) / this.step;
        const stepWidth = 1 / stopCount;
        const result = [0];

        for (let i = 1; i < stopCount; i++) {
          result.push(i * stepWidth);
        }
        result.push(1);
        return result;
      },
      helfStepWidth() {
        if (!this.step) {
          return false;
        }
        return this.step / (this.range[1] - this.range[0]) / 2;
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

        if (!this.step) {
          this.startX = e.clientX;
        } else {
          this.onHandleClick(e);
        }
        window.removeEventListener('mousemove', this.onHandleDragging);
        window.removeEventListener('mouseup', this.onHandleDragEnd);
        this.isDragging = false;
        if (!this.step) {
          this.onChange();
        }
      },
      // track 的 click 事件
      onHandleClick(e) {
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
        this.startX = this.trackLeft + (this.curtPos * this.sliderWidth);
      },
      getCurPos(curClientX) {
        return (curClientX - this.trackLeft) / this.sliderWidth;
      },
      // value -> position
      updateCurPosition(val) {
        const newPos = (val - this.range[0]) / (this.range[1] - this.range[0]);
        return (newPos >= 0 && newPos <= 1) ? newPos : null;
      },
      // position -> value
      updateNewVal(pos) {
        const newVal = (pos * (this.range[1] - this.range[0])) + this.range[0];
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
        if (!newVal) {
          return;
        }
        const newPosition = this.updateCurPosition(newVal);
        if (newPosition !== this.curtPos) {
          this.curtPos = newPosition;
        }
        if (!this.isDragging) {
          this.onChange();
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

        this.trackLeft = this.$refs.track.offsetLeft;
        this.startX = this.trackLeft + (this.curtPos * this.sliderWidth);
      });
    },
  };
</script>
<style scoped lang="scss">
  @import "./dao-slider.scss";
</style>
