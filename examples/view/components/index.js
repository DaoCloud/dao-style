import TopBar from './top-bar/index';
import DcosTitle from './docs-title/index';
import StatusIcon from './status-icon/index';
import GithubBtn from './github-btn/index';
import CodeReader from './code-reader/index';
import DemoCode from './demo-code/index';
import MdReader from './md-reader/index';
import DocsSection from './docs-section/index';
import DocsTable from './docs-table/index';
import CodeBlock from './code-block/index';

const coms = {
  TopBar,
  DcosTitle,
  StatusIcon,
  GithubBtn,
  CodeReader,
  DemoCode,
  MdReader,
  DocsSection,
  DocsTable,
  CodeBlock,
};

export default function install(Vue) {
  Object.keys(coms).forEach((name) => {
    Vue.component(name, coms[name]);
  });
}
