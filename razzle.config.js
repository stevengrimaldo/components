const nodeExternals = require('webpack-node-externals');
const fs = require('fs');

module.exports = {
  modify(config, { target, dev }, webpack) {
    // package un-transpiled packages
    const babelRuleIndex = config.module.rules.findIndex(
      rule =>
        rule.use &&
        rule.use[0].loader &&
        rule.use[0].loader.includes('babel-loader')
    );
    config.module.rules[babelRuleIndex] = Object.assign(
      config.module.rules[babelRuleIndex],
      {
        include: [
          ...config.module.rules[babelRuleIndex].include,
          fs.realpathSync('./node_modules/three'),
        ],
      }
    );
    config.externals =
      target === 'node'
        ? [
            nodeExternals({
              whitelist: [
                dev ? 'webpack/hot/poll?300' : null,
                /\.(eot|woff|woff2|ttf|otf)$/,
                /\.(svg|png|jpg|jpeg|gif|ico)$/,
                /\.(mp4|mp3|ogg|swf|webp)$/,
                /\.(css|scss|sass|sss|less)$/,
                /^three/,
              ].filter(Boolean),
            }),
          ]
        : [];
    // return
    return config;
  },
  modifyBabelOptions() {
    return {
      plugins: [
        'after',
        [
          'styled-components',
          {
            displayName: false,
            fileName: true,
            minify: true,
            pure: true,
            ssr: true,
          },
        ],
        '@babel/plugin-transform-flow-strip-types',
      ],
      presets: ['razzle/babel', '@babel/preset-flow'],
    };
  },
};
