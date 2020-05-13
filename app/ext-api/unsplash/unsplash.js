const axios = require('axios');
const env = require("dotenv");

let unsplashPic = '';
  axios
    .get('https://api.unsplash.com/photos/random', {
      params: { query: 'motivational',
                orientation: 'landscape'
              },
      headers: {
        Authorization:
        'Client-ID ' + process.env.UNSPLASH_ACCESS_KEY
      }
    })
    .then(response => {
      unsplashPic = response.data.urls.raw;
    });

module.exports = unsplashPic;
