const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-guitar-chords.min.js',
      libraryTarget: 'window',
      library: 'VueGuitarChord',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/Chord.vue'),
    output: {
      filename: 'vue-guitar-chords.js',
      libraryTarget: 'umd',
      library: 'vue-guitar-chords',
      umdNamedDefine: true
    }
  })
];
