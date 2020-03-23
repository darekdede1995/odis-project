const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/:id').get((req, res) => {
  Task.find({
    userid: req.params.id
  })
    .then(groups => res.json(groups))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const userid = req.body.userid;

  const newTask = new Task({
    userid: userid,
    description: description,
    finished: false
  });

  newTask
    .save()
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json(req.params.id))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      task.userid = req.body.userid;
      task.description = req.body.description;
      task.finished = req.body.finished;

      task
        .save()
        .then(task => res.json(task))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
