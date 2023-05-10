module.exports = ({
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        shippedProposals: true,
        modules: false,
        corejs: '3.30.2'
      },
    ],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
  ],
});
