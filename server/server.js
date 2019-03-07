require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helpers = require('../helpers');
const dev = process.env.NODE_ENV === 'development';

const instances = require('./components/instances/instances');
const users = require('./components/users/users');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(dev ? helpers.root('client/build') : helpers.root('client/build')));
app.use(cookieParser());

app.use('/api/v1/instances', instances)
app.use('/api/v1/users', users)

app.all('*', (req, res, next) => {
    res.sendFile('index.html', {
        root: dev ? helpers.root('client/build') : helpers.root('client/build')
    });
});

modulges');
         