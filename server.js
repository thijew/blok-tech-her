const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
// const multer = require('multer');
const path = require('path');
// const bodyParser = require('body-parser');

const dotenv = require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  // view ejs
app.set('view engine', 'ejs');
app.set('views, view');

app.use('/static', express.static(path.join(__dirname, 'static')))




  ////////////////////////////////Mongo db////////////////////////////////
  const { MongoClient } = require('mongodb');
  const { ObjectId } = require("mongodb");

const { error } = require('console');

  let db;
  let movies;

  async function connectDB() {
    const uri =  process.env.DB_URI;
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    try {
      await client.connect();
      db = client.db(process.env.DB_NAME);
      movies = db.collection('movies');
    } catch (error) {
      throw error;
    }
  };
  connectDB().then(console.log('we have a connection to mongo!'));
  
////////////  ///////////////////MULTER////////////////////////////////
// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "./static/images/movies");
//   },
//   filename(_req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

////////////////////////////////ROUTES////////////////////////////////
//Home page
app.get('/', (req, res) => {
  res.render('pages/home');
});
//Add page
app.get('/add-movie', (req, res) => {
  res.render('pages/add-movie');
});
// add movie to mongodb
app.post('/add-movie', async (req, res) => {
  console.log(req.body.title);
  try {
    const addMovie = await movies.insertOne({
      title: "TEST",
      director: req.body.director,
      genre: req.body.genre,
      rating: req.body.rating,
      
    });
    console.log(addMovie);
    const insertedId = addMovie.insertedId;
    res.send('hij doet het');
  } catch (err) {
    res.render('pages/add-movie', {error: error.message });
  }
});

// browse page
app.get('/browse', (req, res) => {
  res.render('pages/browse');
});

//edit page
app.get('/edit-movie', (req, res) => {
    
    const movie = db.collection('movies').findOne({},{});
    res.render('pages/edit-movie', { movie });
    
});




































  // 404
app.use((req, res) => {
  res.status(404).render('pages/404');
});

