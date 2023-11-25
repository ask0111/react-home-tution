
const express = require("express");
const router = express.Router();

const {quotes} = require('../../controller/admin/quotes.controller.js')

router.post("/quotes", quotes);


module.exports = router;