module.exports = (app) => {
  const ReadingsController = require('../controllers/readings.controller.js')

  const router = require('express').Router()

  // Retrieve all Readings
  router.get('/readings', ReadingsController.getReadings)

  app.use('/', router)
}
