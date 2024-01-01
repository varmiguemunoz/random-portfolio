const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //configuracion de salida, usando el estandar
    filename: '[name].[contenthash].js' //configuracion de hashes - identificacion de cada proyecto con un hash
  },
  resolve: {
    extensions: ['.js'], //extensiones para que webpack lea los archivos
  },
  module: {
    rules: [
      //reglas para la configuracion de nuestro loader y reconocer nuestros archivos - css- js - etc...
      {
        test: /\m?js$/, //expresion regular, para indicar si este archivo con esa extension esta o no esta
        exclude: /node_modules/, //excluimos la carpeta nodemodules para que nuestra app no se rompa
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css|.styl$/i, //creacion del loader, para el reconocimiento del css
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    //añadimos los plugins, para que el proyecto lea los archivos .html y los transforme a un lenguaje que lo entienda el navegador
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html', //le indicamos el template
      filename: './index.html' //le indicamos la salida y el nombre que va adoptar el archivo en nuestra carpeta dist
    }),
    new MiniCssExtractPlugin({
      //optimizacion de css
      filename: 'assets/[name].[contenthash].css' //asignacion de un hash, para identificar cada build que se hace y si hay cambios, el hash cambie.
    }), //utilizacion del plugin
    new CleanWebpackPlugin() //plugin para la optimizacion organizacional de la carpeta dist en modo desarrollo
  ],
  optimization: {
    //optimizacion para comprimir el css y mejora de performance
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
  }
}
