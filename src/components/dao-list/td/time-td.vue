<template>
  <td class="time-td">
    <span>{{text}}</span>  
  </td>
</template>
<script>
import { _forEach } from '../../../utils/assist';

export default {
  name: 'TimeTd',
  props: ['timeFormat', 'timeStamp'],
  computed: {
    text() {
      switch (this.timeFormat) {
        case 'absolute': {
          const date = new Date(this.timeStamp);
          return `${date.getFullYear()}-${this.doubleDigitFromat(date.getMonth() + 1)}-${this.doubleDigitFromat(date.getDate())} ${this.doubleDigitFromat(date.getHours())}:${this.doubleDigitFromat(date.getMinutes())}:${this.doubleDigitFromat(date.getSeconds())}`;
        }
        case 'relative':
        default: {
          const now = new Date();
          const deltaTime = now.getTime() - this.timeStamp;

          const absDeltaTime = Math.abs(deltaTime);
          const timeDirection = deltaTime > 0 ? '前' : '后';

          const timeTable = [
            {
              threshold: 1,
              unit: '毫秒',
            },
            {
              threshold: 1000,
              unit: '秒',
            },
            {
              threshold: 1000 * 60,
              unit: '分钟',
            },
            {
              threshold: 1000 * 60 * 60,
              unit: '小时',
            },
            {
              threshold: 1000 * 60 * 60 * 24,
              unit: '天',
            },
            {
              threshold: 1000 * 60 * 60 * 24 * 7,
              unit: '周',
            },
            {
              threshold: 1000 * 60 * 60 * 24 * 30,
              unit: '月',
            },
            {
              threshold: 1000 * 60 * 60 * 24 * 365,
              unit: '年',
            },
          ];

          let text = '';
          _forEach(timeTable, (t) => {
            if (t.threshold > absDeltaTime) {
              return false;
            }
            text = `${Math.floor(absDeltaTime / t.threshold)} ${t.unit}${timeDirection}`;
            return true;
          });
          return text;
        }
      }
    },
  },
  methods: {
    doubleDigitFromat(val) {
      return val < 10 ? `0${val}` : val;
    },
  },
};
</script>
<style lang='scss'>
.time-td {
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum";
}
</style>
