require('dotenv').config()
const express = require('express')
const path = require('path')
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.prod');

const debug = process.env.NODE_ENV !== 'production';
const port = debug ? 8080 : process.env.PORT;
const app = express();


app.use('/static', express.static(__dirname + '/dist'));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info(`==> 🌎  Listening at http://localhost:${port}`);
});
