const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema( {
  dueDate : {type: Date, required: false},
  taskName : {type: String, required: true},
  username : {type: String, required: true}
},
{
  timestamps : true
})

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
