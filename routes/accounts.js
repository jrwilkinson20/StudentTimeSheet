var express = require("express");
var accountRouter = express.Router();
let account = require("../Models/account");

accountRouter
  .route("/")
  .all((req, res, next) => {
    next();
  })
  .get((req, res, next) => {
    account.find({}, (err, account) => {
      if (err) throw err;
      res.json(account);
    });
    res.end();
  })
  .post((req, res, next) => {
    account.create(req.body, (err, account) => {
      if (err) throw err;

      console.log("Account Created");
    });
    res.end();
  });

module.exports = accountRouter;
