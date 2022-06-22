const express = require('express')
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  // view ejs
app.set('view engine', 'ejs');
app.set('views, view');

//Home page
app.get('/', (req, res) => {
    res.render('pages/home');
  });

  ////////////////////////////////Mongo db////////////////////////////////

// const { MongoClient} = require('mongodb');
// const uri = "mongodb+srv://thijew:MMMovieMatch@blok-tech.2xkx5.mongodb.net/test";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("blok-tech").collection("MovieMatch");
// console.log("succes");
// console.log(err)
  
// });

// connectDB().then(console.log('we have a connection to mongo!'));

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://thijew:MMMovieMatch@blok-tech.2xkx5.mongodb.net/test";
const client = new MongoClient(url);

// Database Name
const dbName = 'MovieMatch';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('movies');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());