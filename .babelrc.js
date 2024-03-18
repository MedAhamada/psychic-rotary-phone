// https://babeljs.io/docs/en/configuration
const presets = ['@babel/preset-react']

presets.unshift(['@babel/preset-env', { modules: false }])

const plugins = [
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-logical-assignment-operators',
  ['@babel/plugin-proposal-optional-chaining', { loose: false }]
]

module.exports = {
  presets,
  plugins,
  env: {
    test: {
      presets,
      plugins: [...plugins, '@babel/plugin-transform-runtime', 'dynamic-import-node']
    }
  }
}