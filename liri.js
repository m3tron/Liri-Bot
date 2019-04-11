require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

//Get concert data
function concertThis(query) {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        query +
        "/events?app_id=codingbootcamp"
    )
    .then(response => {
      var events = response.data;
      events.forEach(element => {
        console.log(
          `Venue Name: ${element.venue.name}\nVenue Location: ${
            element.venue.city
          }, ${element.venue.country}\nDate of Event: ${moment(
            element.datetime
          ).format("LLLL")}\n`
        );
      });
    });
}

//Get data from spotify
function spotifyThis(query) {
  spotify
    .search({
      type: "track",
      query: query
    })
    .then(response => {
      var songItem = response.tracks.items[0];
      console.log(
        `Artist: ${songItem.artists[0].name}\nSong Name: ${
          songItem.name
        }\nAlbum Name: ${songItem.album.name}\nPreview URL: ${
          songItem.preview_url
        }`
      );
    })
    .catch(err => {
      console.log(
        `Error: ${err}\n\nHere's an alternative\n\n${spotifyThis(
          "the sign ace of base"
        )}`
      );
    });
}

//Get movie info
function movieThis(query) {
  axios
    .get(
      "https://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy"
    )
    .then(response => {
      console.log(
        `Title: ${response.data.Title}\nYear: ${
          response.data.Year
        }\nIMDB Rating: ${response.data.imdbRating}\nRotten Tomato Rating: ${
          response.data.Metascore
        }\nCountry Produced: ${response.data.Country}\nLanguage: ${
          response.data.Language
        }\nPlot: ${response.data.Plot}\nActors: ${response.data.Actors}`
      );
    })
    .catch(err => {
      console.log(
        `Error: ${err}\nHere's an alternative:\n${movieThis("mr nobody")}`
      );
    });
}

//Read random.txt and execute search in file
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", (error, data) => {
    dataArray = data.split(",");
    main(dataArray[0], dataArray[1]);
  });
}

//
function searchThis(request, query) {
  switch (request) {
    case "concert-this":
      concertThis(query);
      break;
    case "spotify-this-song":
      spotifyThis(query);
      break;
    case "movie-this":
      movieThis(query);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
    default:
      console.log("nothing");
  }
}

//
function main(request, query) {
  searchThis(request, query);
}

//
main(process.argv[2], process.argv[3]);
