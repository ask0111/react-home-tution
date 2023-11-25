const mongoose = require("mongoose");
const quotesSchema = require("../../schema/admin/quotes.schema");

const QuotesModel = mongoose.model('Qoutes', quotesSchema);
module.exports = QuotesModel;