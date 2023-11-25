const express = require('express');
const cors = require('cors')
const app = express();
const routes = require('./routers/routes')
app.use(express.json())
app.use(cors())

routes(app)

module.exports = app;
