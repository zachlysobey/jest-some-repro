const babelRuntimeVersion = require('@babel/runtime/package.json').version;

module.exports = {
  sourceType: 'unambiguous',

  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      { version: babelRuntimeVersion, useESModules: true },
    ],
  ],

  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env', { useBuiltIns: false }],
  ],

  env: {
    test: {
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          { version: babelRuntimeVersion, useESModules: false },
        ],
      ],

      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
      ],
    },
  },
}
