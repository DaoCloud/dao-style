<template>
  <div class="multistep" :style="multistepStyle">
    <slot/>
  </div>
</template>

<script>

  export default {
    name: 'multistep',
    props: {
      step: Number,
    },
    data() {
      return {
        currentStep: this.step,
        steps: [],
      };
    },
    computed: {
      multistepStyle() {
        return {
          width: `${this.steps.length * 100}%`,
          transform: `translateX(-${(this.currentStep / this.steps.length) * 100}%)`,
        };
      },
    },
    methods: {
      addStep(step) {
        this.steps.push(step);
      },
    },
    watch: {
      step: {
        handler(newV) {
          if (newV !== this.currentStep) {
            if (newV >= 0 && newV <= (this.steps.length - 1)) {
              this.currentStep = newV;
            } else {
              this.$emit('update:step', this.currentStep);
            }
          }
        },
        immediate: true,
      },
      currentStep(newV) {
        this.$emit('update:step', newV);
      },
    },
  };
</script>

<style lang='scss'>

.multistep{
  display: flex;
  transition: transform .3s;
}

</style>