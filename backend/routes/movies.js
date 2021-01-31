const router = require('express').Router();
const MovieDB = require('node-themoviedb');

const mdb = new MovieDB(process.env.MOVIEDB_API_KEY)

router.get("/", async (req, res) => {
  try {
    var movies = [];

    for (var i = 1; i < 3; i++) {
      const args = {
        pathParameters: {},
        query: {
          page: i
        }
      };

      const movie = await mdb.movie.getNowPlaying(args);
      const results = movie["data"]["results"];

      for (var j = 0; j < results.length; j++) {
        movieData = {
          "title": results[j]["title"],
          "image": "http://image.tmdb.org/t/p/w185" + results[j]["poster_path"],
          "description": results[j]["overview"]
        }
        movies.push(movieData);
      }
    }
    res.status(200).send(movies);
  }
  catch (err) {
    res.status(400).send("error when finding movies: " + err);
  }
})

module.exports = router;