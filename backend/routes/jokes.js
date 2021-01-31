const router = require('express').Router();
let Joke = require('../models/jokes.models');
const mongoose = require('mongoose');

// Generates 10 random jokes for the frontend
router.route('/').get((req, res) => {
    Joke.find()
        .then((joke) => {
            var random_jokes = [];
            var random_num;
            while (random_jokes.length < 10) {
                random_num = Math.floor(Math.random() * joke.length);
                if (!random_jokes.includes(joke[random_num])) {
                    random_jokes.push(joke[random_num]);
                }
            }
            res.json(random_jokes);
        })
        .catch(err => console.log(err))
})

// For backend creation/deletion purposes only
router.route('/create').post((req, res) => {
    query = {
        jokeQuestion: req.body.jokeQuestion,
        jokeAnswer: req.body.jokeAnswer
    }

    newJoke = new Joke(query);
    newJoke.save()
        .then(() => {
            res.status(200).send("joke successfully added!");
            console.log("joke has been added!");
        })
        .catch(err => {
            res.status(400).send("joke failed, error: " + err);
            console.log("joke cannot be added")
        });
})

router.route("/delete/:jokeId").delete((req, res) => {
    Joke.findByIdAndDelete(req.params.jokeId)
        .then(() => {
            res.status(200).send("joke successfully deleted");
            console.log("joke deleted!");
        })

        .catch(err => res.status(400).send("Error: " + err));
})

module.exports = router;