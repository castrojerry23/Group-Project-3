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
        "x-rapidapi-key": "41ecccc96bmshd2778d685cb753dp15c5dejsn77c231b9d116"
        },"params":{
        "term":movie,
        "country":"us"
        }
        })
  }
};