const axios = require('axios');
const env = require("dotenv");

let pictureResult = [];

  //response.data.urls.raw
let picture = axios.get('https://api.unsplash.com/photos/random', {
           params: { query: 'motivational',
                     orientation: 'landscape'
                   },
           headers: {
             Authorization:
             'Client-ID ' + process.env.UNSPLASH_ACCESS_KEY
           }
}).then(function(response){
  if(response){
    pictureResult.push(response.data.urls.full);
    //console.log(pictureResult);
  }
});

module.exports = pictureResult;
