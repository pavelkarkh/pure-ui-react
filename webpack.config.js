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
  },
  style: {
    test: /\.css?$/,
    use: ['style-loader', 'css-loader']
  }
}

// eslint-disable-next-line no-unused-vars
module.exports = env => {
  return {
    entry: './src/index.js',
    output: {
      // eslint-disable-next-line no-undef
      path: path.resolve(__dirname),
      filename: 'index.js',
      library: 'pure-ui-react',
      libraryTarget: 'umd',
    },
    module: {
      rules: [loaders.babel, loaders.style],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json', '*'],
    },
    externals: {
      react: 'react',
    }
  }
}