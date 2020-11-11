const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const connection = mongoose.createConnection('mongodb://localhost:27017/momentos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  text: {
    type: String,
  },
  _id: String
});

const message = connection.model("Message", messageSchema);

let messages = [];

// message.create({ text: 'Hola', _id: new ObjectID() }, function(err){
//   if(err){
//     console.log(err);
//   } else {
//
//   }
// })

// message.deleteMany({}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log("Success deleting messages!");
//   }
// })

message.find(function(error, result){
  if(error){
    console.log(error);
  } else {
    console.log(result);
  }
});
