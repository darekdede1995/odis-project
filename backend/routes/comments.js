const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/:id').get((req, res) => {
  Comment.find({
    userid: req.params.id
  })
    .then(groups => res.json(groups))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const description = req.body.description;
  const userid = req.body.userid;

  const newComment = new Comment({
    userid: userid,
    content: description
  });

  newComment
    .save()
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json(req.params.id))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Comment.findById(req.params.id)
    .then(comment => {
      comment.userid = req.body.userid;
      comment.contnet = req.body.contnet;

      comment
        .save()
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
