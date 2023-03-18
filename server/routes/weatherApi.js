const express = require('express');
const router = express.Router();
const axios = require('axios')
const Weather = require('../models/weather');
const WeatherObj = require('../models/weatherClass')
const weaterApiKey = "417c1e5fcfad3384e413c8f4c74f1bde"
const weatherApiCall = "http://api.openweathermap.org/data/2.5/weather"

router.get("/weather/:city", function (req, res) {
    city = req.params.city
    axios.get(`${weatherApiCall}?q=${city}&APPID=${weaterApiKey}&units=metric`)
    .then((weatherData) => {
        const weather = new WeatherObj(weatherData.data.name, weatherData.data.main.temp, weatherData.data.weather[0].description, weatherData.data.weather[0].icon)
        res.send(weather)
    })
  });

router.get("/weather", function (req, res) {
    Weather.find({}).then((forcast) => res.send(forcast))
});

router.post("/weather", (req, res) => {
    let name = req.body.name
    let temperature = req.body.temperature
    let condition = req.body.condition
    let conditionPic = req.body.conditionPic
    let weather = new Weather({name, temperature, condition, conditionPic})
    weather.save().then(() => res.status(200).send("Added"))
})

router.delete("/weather/:city", (req, res) => {
    let city = req.params.city
    Weather.findOneAndDelete({name: city})
    .then((doc) => {
        console.log("Deleted weather: ", doc);
        res.send("Deleted successfully.")
    })
    .catch((err) => {
        console.log(err);
        res.send("Something went wrong.")
    })

})

module.exports = router;
