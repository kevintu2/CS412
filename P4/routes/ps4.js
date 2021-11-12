
var express = require('express');
var router = express.Router();
const request = require('request');
const {response} = require("express");
const fetch = require('node-fetch');
const redis = require('redis');
const client = redis.createClient();


const weather = 'http://api.weatherapi.com/v1/current.json?key=42204764f91244e8806193530212210&q=Boston&aqi=no';

client.flushdb((err, success) => {
  if (err) {
      throw new Error(err)
  }
});

//Part B
router.post('/partB', function (req, res, next) {
  return new Promise((resolve, reject) => {

      request(weather, (err, response, body) => {
          console.log('statusCode:', response && response.statusCode);
          if(response.statusCode == 200) {
              resolve(body);
              res.render('index',{title: body})
          } else {
              reject(response);
              res.render('index',{title:'Error with API call!'})
          }

      });
  })
});

//Part C
router.post('/partC', async function (req, res, next){
  const response = await fetch(weather);
  const data = await response.text();
  res.render('index', {title: data});
})

//Part D
router.post('/partD', function(req,res,next){
  getWeather(function(result){
      response.send(result)
  })
})

function getWeather(callback){
  request(weather, function(err, res, body){
      return callback(err,body.text())
  })
}

//Part E
router.get('/data', async function(req, res, next){
  const response = await fetch(weather);
  const data = await response.text();
  res.render('ps4', {data:data})
})

//Part F
router.get('/', function(req, res, next) {
  res.render('WeatherForm');
});

router.post('/', async function(req, res, next) {
  
  const city = req.body.City;
  client.exists(city, async function(err, match) {  //looks for key
    if (err) {
        throw new Error(err)
    }
    if (match) { //key exists, grab value
      client.get(city, (err, response) => {
          console.table(response);
          res.send(JSON.stringify(response + ' cached '))
      })
    }
    else{
      console.log(req.body);
      const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=42204764f91244e8806193530212210&q=${city}&aqi=no`)
      const data = await request.text()
      client.set(city, data, 'EX', 5, (err, response) => { //city = key, data = value
        console.table(response);
        res.send(JSON.stringify(data + ' not cached '))
    })

    }
  })
  // console.log(req.body);
  // const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=42204764f91244e8806193530212210&q=${city}&aqi=no`)
  // const data = await request.text()
  res.render('ps4', {data:data})
});


module.exports = router;
