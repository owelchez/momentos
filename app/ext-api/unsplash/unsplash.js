const axios = require('axios');
const env = require("dotenv");

let helpers = {
  getUnsplashPicture: function(){
    return axios.get('https://api.unsplash.com/photos/random', {
              params: { query: 'motivational',
                        orientation: 'landscape'
                      },
              headers: {
                Authorization:
                'Client-ID ' + process.env.UNSPLASH_ACCESS_KEY
              }
   }).then(function(response){
     return response.data.urls.full;
   })
  }
}

module.exports = helpers;
