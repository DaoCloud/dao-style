<template>
  <button class="dao-btn has-icons" :class="cls" @click="goToGithub">
    <svg class="icon">
      <use xlink:href="#icon_github">
      </use>
    </svg>
    <span class="text">Github</span>
  </button>
</template>

<script>
import PackageDesc from '../../../../package.json';

export default {
  name: 'GithubBtn',
  props: {
    color: {
      type: String,
      default: 'grey',
    },
    mini: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cls() {
      return {
        mini: this.mini,
        [this.color]: true,
      };
    },
  },
  methods: {
    goToGithub() {
      window.open(PackageDesc.repository.url);
    },
  },
};
</script>
