module.exports = {
  //entry: ['babel-polyfill', __dirname + '/src/index.js'],
  entry: [ __dirname + '/src/index.js'],
  output: {
    path: __dirname,
    filename: 'index.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};