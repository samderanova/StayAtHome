const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = new Schema( {
  todoListId : { type: mongoose.Types.ObjectId, required: true},
  username : {type : String, required: true}
},
{
  timestamps : true
})

const TodoList = mongoose.model('TodoList', todoListSchema);
module.exports = TodoList;
