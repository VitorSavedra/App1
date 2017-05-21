const Router = require('express').Router();
const request = require('request');
const pug = require('pug');

Router.get('/app1', function(req, res) {
  request('http://private-bc4b79-automobidummy.apiary-mock.com/users', function (error, response, body) {
  body = JSON.parse(body);
  res.render('index_users', { title: 'Usu&aacute;rios', message: 'Usu&aacute;rios', item: body})
    });
});

Router.get('/app1/users', function(req, res) {
  request('http://private-bc4b79-automobidummy.apiary-mock.com/users', function (error, response, body) {
  body = JSON.parse(body);
  res.render('index_users', { title: 'Usu&aacute;rios', message: 'Usu&aacute;rios', item: body})
    });
});

Router.get('/app1/vehicles', function(req, res) {
  request('https://private-bc4b79-automobidummy.apiary-mock.com/vehicles', function (error, response, body) {
  body = JSON.parse(body);
  res.render('index_vehicle', { title: 'Ve&iacute;culos', message: 'Ve&iacute;culos', item: body})
    });
});

module.exports = Router;