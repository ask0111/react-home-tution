const QuotesModel = require("../../db/models/admin/quotes.model");

exports.quotes = async(req, res)=>{
    try {
        const getQuotes = await QuotesModel.find();
        res.status(200).json({getQuotes})
    } catch (error) {
        console.log('get err', error);
        res.status(404).json({})
    }
}