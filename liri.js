require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

/* spotify
  .search({
    type: "track",
    query: "I Want it That Way"
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log("ERROR: " + err);
  }); */

var request = process.argv[2];

switch (request) {
  case "concert-this":
    console.log("concert");
    break;
  case "spotify-this-song":
    console.log("spotify");
    break;
  case "movie-this":
    console.log("movie");
    break;
  case "do-what-it-says":
    console.log("what it says");
  default:
    console.log("nothing");
}
