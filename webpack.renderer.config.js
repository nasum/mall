const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

module.exports = {
  module: {
    rules: [
      ...rules,
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['postcss-loader'],
      },
    ],
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
}
