import axios from "axios";

export default {
  // Gets all streams
  findStreams: function(movie) {
    return axios({
        "method":"GET",
        "url":"https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.UTELLY_KEY,
        },"params":{
        "term":movie,
        "country":"us"
        }
        })
  }
};