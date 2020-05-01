const axios = require('axios');
//const env = require("dotenv");

axios
  .get('https://api.unsplash.com/photos/random', {
    params: { query: 'motivational'},
    headers: {
      Authorization:
      'Client-ID sz5_wP1HYmJj904LAdUp7JDdQSITHkJFANInqYyTK-w'
    }
  })
  .then(response => {
    console.log(response);
  });
