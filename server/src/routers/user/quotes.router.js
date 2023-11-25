
const express = require("express");
const router = express.Router();

const {quotes} = require('../../controller/user/quotes.controller')

router.get('/quotes', quotes);

module.exports = router;