const router = require('express').Router();
let Task = require('../models/tasks.models');
const mongoose = require('mongoose');

router.route('/').get((req, res) => {
  res.status(200).send("Hello world");
})

router.route('/create').post((req, res) => {
  query = {
    taskId: new mongoose.Types.ObjectId(),
    todoListId: 39210740137123,
    // client should send this over
    dueDate: new Date(),
    taskName: req.body.taskName,
    description: req.body.description,
    username: req.body.username
  }

  newTask = new Task(query);
  newTask.save()
    .then(() => {
      res.status(200).send("task successfully added!");
      console.log("task has been added!");
    })
    .catch(err => {
      res.status(200).send("task failed, error: " + err);
      console.log("task cannot be added")
    });
})

router.route("/username/:username").get((req, res) => {
  Task.find({username: req.params.username})
    .then (task => {
      res.status(200).send(task);
      console.log("tasks found: " + task)
    })
    .catch(err => res.status(400).send("Error: " + err));
})

module.exports = router;