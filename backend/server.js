const express = require('express')
const app = express()
const port = 3000

var mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.ATLAS_URI;

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})