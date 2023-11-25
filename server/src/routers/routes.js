const adminQuotesRouter = require('./admin/quotes.router');
const userQuotesRouter = require('./user/quotes.router');
const base_api = '/api/a1/'
module.exports = (app)=>{
    app.get("/ping", (req, res)=>{
        res.send('your are pinged!')
    })
    app.use(`${base_api}admin`, adminQuotesRouter);
    app.use(`${base_api}user`, userQuotesRouter)
}