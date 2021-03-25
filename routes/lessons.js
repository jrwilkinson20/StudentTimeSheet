var express = require("express");
var lessonRouter = express.Router();
let lesson = require("../Models/lesson");

lessonRouter
  .route("/")
  .all((req, res, next) => {
    next();
  })
  .get((req, res, next) => {
    lesson.find({}, (err, lesson) => {
      if (err) throw err;
      res.json(lesson);
    });
    res.end();
  })
  .post((req, res, next) => {
    lesson.create(req.body, (err, lesson) => {
      if (err) throw err;

      console.log("lesson Created");
    });
    res.end();
  });

module.exports = lessonRouter;
