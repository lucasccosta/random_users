const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology:true
}).catch(err => console.log('Err mongoose: ', err))

module.exports = mongoose;