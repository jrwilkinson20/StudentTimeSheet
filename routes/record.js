var express = require("express");
var recordRouter = express.Router();
let record = require("../Models/record");
 recordRouter
  .route("/")
  .all((req, res, next) => {
    next();
  })
  .get((req, res, next) => {
 record.find({}, (err, record) => {
      if (err) throw err;
      res.json (record);
    });
    res.end();
  })
  .post((req, res, next) => {
 record.create(req.body, (err, record) => {
      if (err) throw err;

      console.log("Record Created");
    });
    res.end();
  });

module.exports = recordRouter;
