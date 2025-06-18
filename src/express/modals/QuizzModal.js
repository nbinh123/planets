// models/Quiz.js
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  answers: [{ type: String, required: true }],
  answer: { type: String, required: true },
});

const Quizz = new mongoose.Schema({
  planet: { type: String, required: true },
  questions: [questionSchema],
  link: { type: String }
});

module.exports = mongoose.model("Quizz", Quizz, "quizzs");
