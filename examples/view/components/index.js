import TopBar from './top-bar/top-bar.vue';
import ComName from './com-name/com-name.vue';
import StatusIcon from './status-icon/status-icon.vue';
import GithubBtn from './github-btn/github-btn.vue';
import CodeBoard from './code-board/code-board.vue';
import DemoCode from './demo-code/demo-code.vue';

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
