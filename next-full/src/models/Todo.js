const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Titolo obbligatorio"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
