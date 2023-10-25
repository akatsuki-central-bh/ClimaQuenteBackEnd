// require axios
const axios = require('axios')
// require dotenv
require('dotenv').config()

const url = 'https://api.hgbrasil.com'

function getWeather(woeid, city_name, lat, lon, user_ip){
  return axios.get(`${url}/weather`, {
    params: {
      woeid: woeid,
      city_name: city_name,
      lat: lat,
      lon: lon,
      user_ip: user_ip,
      key: process.env.HGBRASIL_API_KEY
    }
  })
}

function getHistoricalWeather(woeid, city_name, lat, lon, user_ip, days_ago, mode){
  return axios.get(`${url}/weather/historical`, {
    params: {
      woeid: woeid,
      city_name: city_name,
      lat: lat,
      lon: lon,
      user_ip: user_ip,
      days_ago: days_ago,
      mode: mode,
      key: process.env.HGBRASIL_API_KEY
    }
  })
}

module.exports = {
  getWeather,
  getHistoricalWeather
}
