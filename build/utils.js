const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Path = require('path');
const Chalk = require('chalk');
const Semver = require('semver');
const Shell = require('shelljs');
const ChildProcess = require('child_process');
const packageConfig = require('../package.json');

exports.checkVersion = () => {
  function exec(cmd) {
    return ChildProcess.execSync(cmd).toString().trim();
  }

  const versionRequirements = [
    {
      name: 'node',
      currentVersion: Semver.clean(process.version),
      versionRequirement: packageConfig.engines.node,
    },
  ];

  if (Shell.which('npm')) {
    versionRequirements.push({
      name: 'npm',
      currentVersion: exec('npm --version'),
      versionRequirement: packageConfig.engines.npm,
    });
  }
  const warnings = [];

  for (let i = 0; i < versionRequirements.length; i += 1) {
    const mod = versionRequirements[i];

    if (!Semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(`${mod.name}: ${Chalk.red(mod.currentVersion)} should be  ${Chalk.green(mod.versionRequirement)}
      `);
    }
  }

  if (warnings.length) {
    /* eslint-disable no-console */
    console.log('');
    console.log(Chalk.yellow('You must update following to modules:'));
    console.log();

    for (let i = 0; i < warnings.length; i += 1) {
      const warning = warnings[i];
      console.log(`  ${warning}`);
    }
    console.log();
    process.exit(1);
  }
};


exports.styleLoaders = (options) => {
  options = options || {};

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap,
      minimize: options.minimize,
    },
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap,
    },
  };

  const sassLoader = {
    loader: 'sass-loader',
    options: {
      sourceMap: options.sourceMap,
    },
  };

  const loaders = [cssLoader, postcssLoader, sassLoader];

  const fallback = options.fallback || 'style-loader';
  if (options.extract === false) {
    return [fallback].concat(loaders);
  }
  return ExtractTextPlugin.extract({
    fallback,
    use: loaders,
  });
};


exports.genPath = dir => Path.join(__dirname, '..', dir);


exports.isProduction = process.env.NODE_ENV === 'production';
