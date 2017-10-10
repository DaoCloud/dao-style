// es6 polyfill
import 'core-js/fn/array/find-index';
import './components/dao-svg/svg';

// 纯样式组件
import './components/common.scss';
import './components/dao-button/dao-button.scss';
import './components/dao-button/dao-button-group.scss';
import './components/dao-card/dao-card.scss';
import './components/dao-checkbox/dao-checkbox.scss';
import './components/dao-list-group/dao-list-group.scss';
import './components/dao-table/dao-table.scss';

// 请按照名称的字典顺序添加以下 component
import daoAutocomplete from './components/dao-autocomplete';
import daoCallout from './components/dao-callout';
import daoClipboard from './components/dao-clipboard';
import daoDialog from './components/dao-dialog';
import daoDraggableComponent from './components/dao-draggable';
import daoDropdown from './components/dao-dropdown';
import { daoEditableInput, daoInput } from './components/dao-input';
import daoEditableTable from './components/dao-editable-table';
import daoNumericBadge from './components/dao-numeric-badge';
import daoPopover from './components/dao-popover';
import { daoProgress, daoProgressPulsing, daoProgressStacked } from './components/dao-progress';
import daoRadio from './components/dao-radio';
import daoSelect from './components/dao-select';
import daoSettingLayout from './components/dao-setting-layout';
import daoSlider from './components/dao-slider';
import daoSteps from './components/dao-steps';
import daoSwitch from './components/dao-switch';
import daoTab from './components/dao-tab';
import daoTooltip from './components/dao-tooltip';

// 请按照名称的字典顺序添加以下 directives
import { daoDraggable, daoDroppable } from './directives/draggable/';
import daoSelectAll from './directives/dao-select-all';
import daoTooltipDirective from './directives/dao-tooltip';

const daoStyleComponents = {
  // 请按照名称的字典顺序添加以下内容
  daoAutocomplete,
  daoCallout,
  daoClipboard,
  daoCopyBlock: daoClipboard.CopyBlock,
  daoDialog,
  daoDialogStep: daoDialog.Step,
  daoDraggable: daoDraggableComponent,
  daoDropdown,
  daoDropdownItem: daoDropdown.Item,
  daoDropdownMenu: daoDropdown.Menu,
  daoEditableInput,
  daoEditableTable,
  daoInput,
  daoNumericBadge,
  daoOption: daoSelect.Option,
  daoOptionGroup: daoSelect.Group,
  daoPopover,
  daoProgress,
  daoProgressPulsing,
  daoProgressStacked,
  daoRadio,
  daoRadioGroup: daoRadio.group,
  daoSelect,
  daoSettingItem: daoSettingLayout.Item,
  daoSettingLayout,
  daoSettingSection: daoSettingLayout.Section,
  daoSlider,
  daoStep: daoSteps.step,
  daoStepContent: daoSteps.content,
  daoSteps,
  daoSubstep: daoSteps.substep,
  daoSwitch,
  daoTab,
  daoTabItem: daoTab.Item,
  daoTooltip,
};

const daoStyleDirectives = {
  'dao-select-all': daoSelectAll,
  'dao-tooltip': daoTooltipDirective,
  'dao-draggable': daoDraggable,
  'dao-droppable': daoDroppable,
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
