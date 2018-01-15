

import Vue from 'vue';
import appCardLayout from './app-card/app-card-layout.vue';
import appCardCol from './app-card/app-card-col.vue';
import appCard from './app-card/app-card.vue';
import appCardIcon from './app-card/app-card-icon';
import appCardContent from './app-card/app-card-content';
import appCardFooter from './app-card/app-card-footer';

const componentsTemp = {
  appCardLayout,
  appCardCol,
  appCard,
  appCardIcon,
  appCardContent,
  appCardFooter,
};

const components = {};

Object.keys(componentsTemp).forEach((key) => {
  components[key] = Vue.component(key, componentsTemp[key]);
});

export default components;

