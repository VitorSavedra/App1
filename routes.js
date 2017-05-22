const Router = require('express').Router();
const request = require('request');
const pug = require('pug');

// Rota principal de App1.
Router.get('/app1', function(req, res) {
  // Realiza requisição em API externa.
  request('http://private-bc4b79-automobidummy.apiary-mock.com/users', function (error, response, body) {
  // Converte resultado de requisição em JSON.
  body = JSON.parse(body);
  // Renderiza página HTML.
  res.render('index_users', { item: body})
    });
});

// Rota 'users' de App1.
Router.get('/users', function(req, res) {
  request('http://private-bc4b79-automobidummy.apiary-mock.com/users', function (error, response, body) {
  body = JSON.parse(body);
  res.render('index_users', { item: body})
    });
});

// Rota 'vehicles' de App1.
Router.get('/vehicles', function(req, res) { 
  request('https://private-bc4b79-automobidummy.apiary-mock.com/vehicles', function (error, response, body) {
  body = JSON.parse(body);
  res.render('index_vehicle', { item: body})
    });
});

module.exports = Router;