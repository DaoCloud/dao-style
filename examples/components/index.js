

import Vue from 'vue';
// card
import appCardLayout from './app-card/app-card-layout.vue';
import appCardCol from './app-card/app-card-col.vue';
import appCard from './app-card/app-card.vue';
import appCardIcon from './app-card/app-card-icon';
import appCardContent from './app-card/app-card-content';
import appCardFooter from './app-card/app-card-footer';

// radio
import appRadioGroup from './app-radio/app-radio-group.vue';
import appRadioBlock from './app-radio/app-radio-block.vue';
import appRadioCard from './app-radio/app-radio-card.vue';
import appRadioPlus from './app-radio/app-radio-plus.vue';

const componentsTemp = {
  appCardLayout,
  appCardCol,
  appCard,
  appCardIcon,
  appCardContent,
  appCardFooter,
  appRadioGroup,
  appRadioBlock,
  appRadioCard,
  appRadioPlus,
};

const components = {};

Object.keys(componentsTemp).forEach((key) => {
  components[key] = Vue.component(key, componentsTemp[key]);
});

export default components;

