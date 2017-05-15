// es6 polyfill
import 'core-js/fn/array/find-index';

import daoCallout from './components/dao-callout';
import daoModal from './components/dao-modal';
import daoSwitch from './components/dao-switch';
import daoTooltip from './components/dao-tooltip';
import daoDropdown from './components/dao-dropdown';
import daoInput from './components/dao-input';
import './components/dao-svg/svg';

const daoStyle = {
  daoCallout,
  daoModal,
  daoSwitch,
  daoTooltip,
  daoDropdown,
  daoDropdownMenu: daoDropdown.Menu,
  daoDropdownItem: daoDropdown.Item,
  daoInput,
};

function install(Vue) {
  Object.keys(daoStyle).forEach((key) => {
    Vue.component(key, daoStyle[key]);
  });
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(daoStyle, { install }); // eslint-disable-line no-undef
