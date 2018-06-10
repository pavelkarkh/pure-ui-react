const path = require('path')

const loaders = {
  babel: {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['babel-preset-env', 'babel-preset-stage-2', 'react']
      }
    }
  }
}

module.exports = env => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname),
      filename: 'index.js',
      library: 'pure-ui-react',
      libraryTarget: 'umd',
    },
    module: {
      rules: [loaders.babel],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '*'],
    },
    externals: {
      react: 'react',
    }
  }
}