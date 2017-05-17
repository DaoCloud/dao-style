module.exports = {
  extends: [
    '../.eslintrc.js',
  ],
  globals: {
    expect: true,
    sinon: true,
  },
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    'no-unused-expressions': 0,
  },
};
