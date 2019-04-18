require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");

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
        var result = `Venue Name: ${element.venue.name}\nVenue Location: ${
          element.venue.city
        }, ${element.venue.country}\nDate of Event: ${moment(
          element.datetime
        ).format("LLLL")}\n`;
        console.log(result);
        logIt(result);
      });
    });
}

//Get data from spotify
var spotify = new Spotify(keys.spotify);
function spotifyThis(query) {
  spotify
    .search({
      type: "track",
      query: query
    })
    .then(response => {
      var songItem = response.tracks.items[0];
      var result = `Artist: ${songItem.artists[0].name}\nSong Name: ${
        songItem.name
      }\nAlbum Name: ${songItem.album.name}\nPreview URL: ${
        songItem.preview_url
      }`;
      console.log(result);
      logIt(result);
    })
    .catch(err => {
      var result = `Error: ${err}\n\nHere's an alternative\n\n${spotifyThis(
        "the sign ace of base"
      )}`;
      console.log(result);
      logIt(result);
    });
}

//Get movie info
function movieThis(query) {
  axios
    .get(
      "https://www.omdbapi.com/?t=" + query + "&y=&plot=short&apikey=trilogy"
    )
    .then(response => {
      if (response.data.Title === undefined) {
        var result = `Could not find what you're looking for. Here's an alternative:\n${movieThis(
          "mr nobody"
        )}\nIf you havent watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/\nIt's on Netflix!`;
      } else
        var result = `Title: ${response.data.Title}\nYear: ${
          response.data.Year
        }\nIMDB Rating: ${response.data.imdbRating}\nRotten Tomato Rating: ${
          response.data.Metascore
        }\nCountry Produced: ${response.data.Country}\nLanguage: ${
          response.data.Language
        }\nPlot: ${response.data.Plot}\nActors: ${response.data.Actors}`;
      console.log(result);
      logIt(result);
    });
}

//Read random.txt and execute search in file
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    var dataArray = data.split(",");
    console.log(dataArray);
    main(dataArray[0], dataArray[1]);
  });
}

//Write data to log.txt
var text = `---------------------------------\n
Time of Search: ${moment()}\nSearch Parameters: ${process.argv[2]}, ${
  process.argv[3]
}`;
function logIt(result) {
  fs.appendFile("log.txt", `${text}\nResults:\n${result}\n`, err => {
    if (err) throw err;
  });
}

//Checks to see which function it should run and then runs it
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
      console.log("Try again");
  }
}

//The main function which chooses which request to run
function main(request, query) {
  searchThis(request, query);
}

//Calling the main function with inputs given by user
main(process.argv[2], process.argv[3]);
