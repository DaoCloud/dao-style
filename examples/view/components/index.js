import TopBar from './top-bar/top-bar.vue';
import ComName from './com-name/com-name.vue';
import StatusIcon from './status-icon/status-icon.vue';

const coms = {
  TopBar,
  ComName,
  StatusIcon,
};
export default function install(Vue) {
  Object.keys(coms).forEach((name) => {
    Vue.component(name, coms[name]);
  });
}
