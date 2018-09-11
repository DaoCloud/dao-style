import TopBar from './top-bar';
import DocsTitle from './docs-title';
import StatusIcon from './status-icon';
import GithubBtn from './github-btn';
import CodeReader from './code-reader';
import DemoCode from './demo-code';
import MdReader from './md-reader';
import DocsSection from './docs-section';
import DocsTable from './docs-table';
import CodeBlock from './code-block';

const coms = {
  TopBar,
  DocsTitle,
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
