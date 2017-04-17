// es6 polyfill
import 'core-js/fn/array/find-index';

import daoCallout from './components/dao-callout';
import daoModal from './components/dao-modal';
import daoSwitch from './components/dao-switch';
import daoDropdown from './components/dao-dropdown';
import './components/dao-svg/svg';

const daoStyle = {
  daoCallout,
  daoModal,
  daoSwitch,
  daoDropdown,
  daoDropdownMenu: daoDropdown.Menu,
  daoDropdownItem: daoDropdown.Item,
};

const install = function(Vue) {
  Object.keys(daoStyle).forEach((key) => {
    Vue.component(key, daoStyle[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign(daoStyle, { install }); // eslint-disable-line no-undef
