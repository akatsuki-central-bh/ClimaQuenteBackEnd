const hgbrasil_services = require('./services/hgbrasil/api.js')
const hgbrasil_mock_services = require('./services/hgbrasil/mock.js')

const basicAuth = require('express-basic-auth')
const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.use(basicAuth({
  users: { 'admin': 'admin' }
}))

app.get('/weather', (req, res) => {
  const params = req.query

  if(params.test){
    res.send(hgbrasil_mock_services.getWeather(params.woeid, params.city_name, params.lat, params.lon, params.user_ip))
    return;
  }

  hgbrasil_services.getWeather(params.woeid, params.city_name, params.lat, params.lon, params.user_ip)
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      // res.send(error)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
