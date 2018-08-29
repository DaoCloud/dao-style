import TopBar from './top-bar/top-bar.vue';
import ComName from './com-name/com-name.vue';
import StatusIcon from './status-icon/status-icon.vue';
import GithubBtn from './github-btn/github-btn.vue';

const coms = {
  TopBar,
  ComName,
  StatusIcon,
  GithubBtn,
};

export default function install(Vue) {
  Object.keys(coms).forEach((name) => {
    Vue.component(name, coms[name]);
  });
}
