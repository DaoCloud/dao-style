// es6 polyfill
import 'core-js/fn/array/find-index';
import './components/dao-svg/svg';

// components
import daoAutocomplete from './components/dao-autocomplete';
import daoCallout from './components/dao-callout';
import daoDialog from './components/dao-dialog';
import daoDropdown from './components/dao-dropdown';
import { daoInput, daoEditableInput } from './components/dao-input';
import daoPopover from './components/dao-popover';
import daoEditableTable from './components/dao-editable-table';
import { daoProgress, daoProgressPulsing, daoProgressStacked } from './components/dao-progress';
import daoRadio from './components/dao-radio';
import daoSelect from './components/dao-select';
import daoSettingLayout from './components/dao-setting-layout';
import daoSteps from './components/dao-steps';
import daoSwitch from './components/dao-switch';
import daoTab from './components/dao-tab';
import daoTooltip from './components/dao-tooltip';
// directives
import daoSelectAll from './directives/dao-select-all';

const daoStyleComponents = {
  daoAutocomplete,
  daoCallout,
  daoDialog,
  daoDialogStep: daoDialog.Step,
  daoDropdown,
  daoDropdownMenu: daoDropdown.Menu,
  daoDropdownItem: daoDropdown.Item,
  daoEditableInput,
  daoEditableTable,
  daoInput,
  daoOption: daoSelect.Option,
  daoOptionGroup: daoSelect.Group,
  daoPopover,
  daoProgress,
  daoProgressPulsing,
  daoProgressStacked,
  daoRadio,
  daoRadioGroup: daoRadio.group,
  daoSelect,
  daoSettingLayout,
  daoSettingItem: daoSettingLayout.Item,
  daoSettingSection: daoSettingLayout.Section,
  daoSteps,
  daoStep: daoSteps.step,
  daoStepContent: daoSteps.content,
  daoSubstep: daoSteps.substep,
  daoSwitch,
  daoTab,
  daoTabItem: daoTab.Item,
  daoTooltip,
};

const daoStyleDirectives = {
  'dao-select-all': daoSelectAll,
};

function install(Vue) {
  Object.keys(daoStyleComponents).forEach((key) => {
    Vue.component(key, daoStyleComponents[key]);
  });
  Object.keys(daoStyleDirectives).forEach((key) => {
    Vue.directive(key, daoStyleDirectives[key]);
  });
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = Object.assign({ install });
