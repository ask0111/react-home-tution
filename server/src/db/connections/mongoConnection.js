const mongoose = require('mongoose');   

mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "ReLearner"
  }).then(()=>{
    console.log('DB connected...')
  }).catch((error)=>{
    console.log('DB Error...', error)
  })