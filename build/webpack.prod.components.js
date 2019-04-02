const fs = require('fs');
const path = require('path');
const Merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const utils = require('./utils');

// https://webpack.js.org/configuration/entry-context/#dynamic-entry
function dynamicEntry() {
  // TODO those should be excluded from components directory since they are not components
  const excluded = [
    'dao-card',
    'dao-checkbox',
    'dao-list-group',
    'dao-svg',
    'dao-table',
  ];

  const COMPONENTS_DIR = path.resolve(__dirname, '../src/components');
  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  const entry = {};

  fs.readdirSync(COMPONENTS_DIR).filter((s) => {
    if (excluded.indexOf(s) >= 0) return false;

    const stat = fs.statSync(`${COMPONENTS_DIR}/${s}`);
    if (stat.isFile()) return false;
    return s.startsWith('dao-');
  }).forEach((i) => {
    const name = i.split('-').map(capitalize).join('');
    const f = `${COMPONENTS_DIR}/${i}/index.js`;
    entry[name] = f;
  });

  return entry;
}

module.exports = Merge(webpackBaseConfig, {
  mode: 'production',
  entry: dynamicEntry,

  output: {
    path: utils.genPath('lib'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },

  externals: {
    vue: 'Vue',
  },
});
