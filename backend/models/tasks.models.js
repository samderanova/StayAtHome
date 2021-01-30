const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema( {
  taskId : {type: Schema.Types.ObjectId, required: true},
  // todo should be objectid
  todoListId : { type: Number, required: true},
  dueDate : {type: Date, required: true},
  taskName : {type: String, required: true},
  username : {type: String, required: true}
},
{
  timestamps : true
})

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
