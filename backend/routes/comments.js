const router = require('express').Router();
let Comment = require('../models/comment.model');

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const content = req.body.content;

  const newComment = new Comment({
    username: username,
    content: content
  });

  newComment
    .save()
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
