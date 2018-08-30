import TopBar from './top-bar/index.vue';
import ComName from './com-name/index.vue';
import StatusIcon from './status-icon/index.vue';
import GithubBtn from './github-btn/index.vue';
import CodeBoard from './code-board/index.vue';
import DemoCode from './demo-code/index.vue';

const coms = {
  TopBar,
  ComName,
  StatusIcon,
  GithubBtn,
  CodeBoard,
  DemoCode,
};

export default function install(Vue) {
  Object.keys(coms).forEach((name) => {
    Vue.component(name, coms[name]);
  });
}
