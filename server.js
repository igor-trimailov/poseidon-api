const express = require('express')
const cors = require('cors')

const app = express()

// initiate the database
const db = require("./models");
db.sequelize.sync();

var corsOptions = {
  origin: 'http://localhost:8081',
}

app.use(cors(corsOptions))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse the incoming requests with JSON payloads
app.use(express.json())

// simple route
app.get('/', (req, res) => {
  res.json({
    message: 'This would be a good place for the documentation, huh?',
  })
})

// init router
require("./routes/readings.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
