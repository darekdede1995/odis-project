const router = require('express').Router();
let UserSession = require('../models/userSession.model');

router.route('/verify').post((req, res) => {
  UserSession.findById(req.body.session._id)
    .then(session => res.json(session))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  console.log(req.body);
  const userid = req.body.userid;

  const newUserSession = new UserSession({
    userid: userid
  });

  newUserSession
    .save()
    .then(session => res.json(session))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  UserSession.findByIdAndDelete(req.params.id)
    .then(() => res.json(req.params.id))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
