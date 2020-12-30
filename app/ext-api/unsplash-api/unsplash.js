const env = require("dotenv").config();
const fetch = require('node-fetch');
const axios = require('axios');

const clientId = process.env.UNSPLASH_ACCESS_KEY;
const url = "https://api.unsplash.com/photos/random/?client_id=" + clientId + "&query=motivational&orientation=landscape";

async function getPicture(){
  try{
    let response = await axios.get(url);
    //console.log("From unsplash " + response.data.urls.full);
    return await response.data.urls.full;
  } catch(err){
    console.log(err);
  }
}

module.exports = getPicture;

// const getPicture = async (resolve, reject) => {
//   const unsplashPicture = await axios.get(url);
//   console.log("From unsplash " + unsplashPicture);
//   return unsplashPicture;
// }


// const env = require("dotenv");
//


// let helpers = {
//   getUnsplashPicture: function(){
//     return axios.get('https://api.unsplash.com/photos/random', {
//               params: { query: 'motivational',
//                         orientation: 'landscape'
//                       },
//               headers: {
//                 Authorization:
//                 'Client-ID ' + process.env.UNSPLASH_ACCESS_KEY
//               }
//    }).then(function(response){
//      return response.data.urls.full;
//    })
//   }
// }

// const picture = fetch(url)
//                 .then(function(data){
//                   return data.json();
//                 })
//                 .then(function(data){
//                   console.log(data.urls.full);
//                 })
