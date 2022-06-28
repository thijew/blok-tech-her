//  adding a movie to the db
const addMovie = async (req, res, next) => {
    let movie = {
      image: req.file.filename,
      director: req.body.director,
      genre: req.body.genre,
      rating: req.body.rating
    };
// sending to the db
    await db.collection('movies').insertOne(movie);
  
// finding the movies
    const query = {};
    const movies = await db.collection('movies').find(query, {}).toArray();
  };
  
  module.exports = {
    addMovie: addMovie,
  };
  