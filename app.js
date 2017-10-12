'use strict';

var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send('Hello');
});

app.get('/user', (req, res) => {
	res.cookie('cookie', 'donut');
	res.json({name: 'valera'});
});

app.get('/login', (req, res) => {
	res.status(500).json({error: '500'});
});

app.listen(3000, () => {
	console.log('Ready on http://localhost:3000');
});

module.exports = app;
