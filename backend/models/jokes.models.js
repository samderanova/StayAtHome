const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jokeSchema = new Schema( {
    jokeQuestion : {type: String, required: true},
    jokeAnswer : {type: String, required: true}
},
{
  timestamps : true
})

const Joke = mongoose.model('Joke', jokeSchema);
module.exports = Joke;
