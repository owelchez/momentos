const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb://localhost:27017/momentos", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function(err, db){
  if(err){
    console.log('Connection failed.');
  } else {
    console.log('Connected!');
  }
});

module.exports = connection;
