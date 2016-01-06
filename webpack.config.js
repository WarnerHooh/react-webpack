var webpack = require('webpack');

module.exports = {
  // entry: './js/entry.js',
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/index.jsx' // Your appʼs entry point
  ],
  output: {
    path: __dirname + '/js/',
    filename: './lib/bundle.js',
    publicPath: '/src/'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      // { test: /\.js$/, loaders: ['react-hot', 'babel-loader!jsx?harmony'], exclude: /node_modules/ }
      { test: /\.jsx$/, loaders: ['react-hot', 'babel'],exclude: /node_modules/ },
      { test: /\.js$/,loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // parsets:['jsx','es2015'],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};