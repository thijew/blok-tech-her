const express = require('express')
const app = express();
const port = 5000;

require('dotenv').config();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  // view ejs
app.set('view engine', 'ejs');
app.set('views, view');

////////////////////////////////ROUTES////////////////////////////////
//Home page
app.get('', (req, res) => {
    res.render('pages/home');
  });
//Add page
app.get('/add', (req, res) => {
    res.render('pages/add');
});
// browse page
app.get('/browse', (req, res) => {
    res.render('pages/browse');
});

const addMovie = require('./routes/add');
app.use('/add', addMovie);


  ////////////////////////////////Mongo db////////////////////////////////
const { MongoClient } = require('mongodb');
// Connection URI
const uri = "mongodb+srv://thijew:MMMovieMatch@blok-tech.2xkx5.mongodb.net/test";
// const uri =
//     'mongodb+srv://' +
//     process.env.DB_USERNAME +
//     ':' +
//     process.env.DB_PASS +
//     '@' +
//     process.env.DB_HOST +
//     '/' +
//     process.env.DB_NAME +
//     '/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
// Database Name
const dbName = 'MovieMatch';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('movies');
  return 'done.';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
  ////////////////////////////////Mongo db////////////////////////////////

  // 404
app.use((req, res) => {
  res.status(404).render('pages/404');
});

