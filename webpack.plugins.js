const ESLintPlugin = require('eslint-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = [new ForkTsCheckerWebpackPlugin(), new ESLintPlugin()]
