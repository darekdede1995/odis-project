const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  userid: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const Task = mongoose.model('Task', CommentSchema);

module.exports = Task;
