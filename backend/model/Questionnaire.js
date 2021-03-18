const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const QuestionnaireSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  answer1: {
    type: String,
    required: true
  },
  answer2: {
    type: String,
    required: true
  },
  answer3: {
    type: String,
    required: true
  },
  answer4: {
    type: String,
    required: true
  },
  answer5: {
    type: String,
    required: true
  },
  answer6: {
    type: String,
    required: true
  }
});
module.exports = Questionnaire = mongoose.model("questionnaire", QuestionnaireSchema);