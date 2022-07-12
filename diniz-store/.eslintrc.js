module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': ['error', 'windows'],
    'vue/multi-word-component-names': 'off',
  },
};
