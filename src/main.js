'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);



// Imports dependencies and set up http server
const
    request = require('request'),
    express = require('express'),
    body_parser = require('body-parser'),
    dotenv = require('dotenv').config();

var app = express();

app.set('port', process.env.PORT || 80);
app.use(body_parser.json());
app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;


