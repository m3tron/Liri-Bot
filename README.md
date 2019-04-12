# Liri-Bot

## Intro

Liri will search Spotify for songs, Bands in Town for upcoming concerts, and OMDB for movie information.

There are 4 commands you can give Liri in the console:

**_node liri_** followed by one of the following commands:

1. concert-this "artist-name"
2. spotify-this-song "song-name"
3. movie-this "movie-name"
4. do-what-it-says

It will return the results into the console and log the results into a log file.

---

1. To search for upcoming concerts by your favorite artist enter the following:
   ![alt-text](screenshots/concertThisSearch.png)

- It will return the following in the console:

![alt-text](screenshots/concertThisConsole1.png)
![alt-text](screenshots/concertThisConsole2.png)

- It will log the results into a log.txt file:

![alt-text](screenshots/concertThisLog1.png)
![alt-text](screenshots/concertThisLog2.png)
![alt-text](screenshots/concertThisLog3.png)
![alt-text](screenshots/concertThisLog4.png)

2. To search for a song on Spotify enter the following:
   ![alt-text](screenshots/spotifyThisSongSearch.png)

- It will return the following in the console:
  ![alt-text](screenshots/spotifyThisSongConsole.png)

- It will log the results into a log.txt file:
  ![alt-text](screenshots/spotifyThisSongLog.png)

- It is set to return the following if your search return undefined:
  ![alt-text](screenshots/spotifyThisSongSearchError.png)
  ***
  ![alt-text](screenshots/spotifyThisSongErrorConsole.png)
  ***
  ![alt-text](screenshots/spotifyThisSongSearchErrorLog.png)

3. To search for information about a movie enter the following:
   ![alt-text](screenshots/movieThisSearch.png)

- It will return the following in the console:
  ![alt-text](screenshots/movieThisConsole.png)

  - It will log the results into a log.txt file:
    ![alt-text](screenshots/movieThisLog.png)

  - It is set to return the following if your search returns undefined:
    ![alt-text](screenshots/movieThisErrorSearch.png)
    ***
    ![alt-text](screenshots/movieThisErrorConsole.png)
    ***
    ![alt-text](screenshots/movieThisErrorLog.png)

4. To search based on the random.txt file enter the following:
   ![alt-text](screenshots/doWhatItSaysSearch.png)

   - It will return the following in the console:
     ![alt-text](screenshots/doWhatItSaysConsole.png)

   - It will log the results into a log.txt file:
     ![alt-text](screenshots/doWhatItSaysLog.png)
