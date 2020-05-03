const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: { type: String, required: true},
    fulfilled: {type: Boolean, required: true, default: false}
});

module.exports = mongoose.model('Task', taskSchema);