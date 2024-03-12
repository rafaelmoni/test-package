const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    reducers: {
      import: './src/reducers.ts',
    },
    interactiveMap: {
      import: './src/useInteractive.ts',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    publicPath: isProduction ? '/dist/' : '/',
    libraryTarget: 'commonjs2',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins: [],
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    next: 'next',
    'next/router': 'next/router',
  },
  //devtool: isProduction ? false : 'eval-source-map', // 'source-map'
}
