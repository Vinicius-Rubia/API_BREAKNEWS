const mongoose = require('mongoose');

const connectDadabase = () => {
  console.log('wait connection');

  mongoose.connect(
    "mongodb+srv://root:root@cluster0.y11chll.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err));
}

module.exports = connectDadabase;
