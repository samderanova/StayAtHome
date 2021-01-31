<<<<<<< HEAD
const router = require('express').Router();
let Task = require('../models/tasks.models');
const mongoose = require('mongoose');


router.route('/').get((req, res) => {
  Task.find()
    .then(task => res.json(task))
    .catch(err => console.log(err))
})

router.route('/create').post((req, res) => {
  query = {
    dueDate: req.body.dueDate,
    taskName: req.body.taskName,
    username: req.body.username
  }

  newTask = new Task(query);
  newTask.save()
    .then(() => {
      res.status(200).send("task successfully added!");
      console.log("task has been added!");
    })
    .catch(err => {
      res.status(400).send("task failed, error: " + err);
      console.log("task cannot be added")
    });
})

router.route("/username/:username").get((req, res) => {
  Task.find({username: req.params.username})
    .then (task => {
      res.status(200).send(task);
      console.log("tasks found: " + task);
    })
    .catch(err => res.status(400).send("Error: " + err));
})

router.route("/delete/:taskId").delete((req, res) => {
  Task.findByIdAndDelete(req.params.taskId)
    .then (() => {
      res.status(200).send("task successfully deleted");
      console.log("task deleted!");
    })

    .catch (err => res.status(400).send("Error: " + err));
})

=======
const router = require('express').Router();
let Task = require('../models/tasks.models');
const mongoose = require('mongoose');


router.route('/').get((req, res) => {
  Task.find()
    .then(task => res.json(task))
    .catch(err => console.log(err))
})

router.route('/create').post((req, res) => {
  query = {
    dueDate: req.body.dueDate,
    taskName: req.body.taskName,
    username: req.body.username
  }

  newTask = new Task(query);
  newTask.save()
    .then(() => {
      res.status(200).send("task successfully added!");
      console.log("task has been added!");
    })
    .catch(err => {
      res.status(400).send("task failed, error: " + err);
      console.log("task cannot be added")
    });
})

router.route("/username/:username").get((req, res) => {
  Task.find({username: req.params.username})
    .then (task => {
      res.status(200).send(task);
      console.log("tasks found: " + task);
    })
    .catch(err => res.status(400).send("Error: " + err));
})

router.route("/delete/:taskId").delete((req, res) => {
  Task.findByIdAndDelete(req.params.taskId)
    .then (() => {
      res.status(200).send("task successfully deleted");
      console.log("task deleted!");
    })

    .catch (err => res.status(400).send("Error: " + err));
})

>>>>>>> 993d3d54a9fe0133fb925c02a582fc0924769867
module.exports = router;