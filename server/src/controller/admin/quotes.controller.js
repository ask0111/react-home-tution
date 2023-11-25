const QuotesModel = require('../../db/models/admin/quotes.model')
exports.quotes = async (req, res)=> {
    const {date, text, image, auther} = req.body;
    console.log(date, text, image, auther)
    try {
        const addQuote = new QuotesModel({date, text, image, auther});
        const quote = await addQuote.save();
        res.status(200).json({
            message: "Quote added successfully",
            quote,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error saving quote to the database." });
    }
}