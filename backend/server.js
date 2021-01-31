const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// handles CORS
app.use(cors());
// allows parsing of JSON
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established!")
})

const taskRouter = require('./routes/tasks');
const movieRouter = require('./routes/movies');

app.use('/tasks', taskRouter);
app.use('/movies', movieRouter);
/*
const exercisesRouter= require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
*/

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})