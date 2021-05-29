// require('dotenv').config()
// const sql = require('../models/db.js')
const db = require('../models')
// const sequelize = require('sequelize')
const ReadingsModel = db.readings
// const Op = require('sequelize').Op
class ReadingsController {
  static getReadings = async (req, res) => {
    const readings = await ReadingsModel.findAll()
    if (!readings) {
      return res.status(200).send({
        status: 404,
        message: 'No data found',
      })
    }
    res.status(200).send({
      status: 200,
      message: 'Data find Successfully',
      data: readings
    })
  }
  catch(error) {
    console.log(error)
    return res.status(400).send({
      message: 'Unable to find data',
      errors: error,
      status: 400,
    })
  }
}

module.exports = ReadingsController
