var express = require('express');
var professorRouter = express.Router();
const mongoose = require('mongoose');
let Account = require('../Models/account');
let Class = require('../Models/class');
let Lesson = require('../Models/lesson');
let Record = require('../Models/record');

professorRouter
	.route('/')
	//Get all professor accounts
	.get((req, res, next) => {
		Account.find({ account_type: 'PROFESSOR' })
			.populate('class')
			.exec()
			.then((accounts) => {
				res.status(200).json(accounts);
			})
			.catch((err) => {
				res.status(500).json({
					error: err,
				});
			});
	})
	//Add a new professor account
	.post((req, res, next) => {
		const account = new Account({
			_id: mongoose.Types._ObjectId,
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
			account_type: req.body.account_type,
			class: [Schema.Types.Class],
		});
		account
			.save()
			.then((result) => {
				console.log(result);
				res.status(201).json({ result });
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json({ error: err });
			});
	});

professorRouter
	.route('/:accountId/')
	//Get an account with a specific ID
	.get((req, res, next) => {
		Account.findById(req.params.accountId)
			.populate('class')
			.exec()
			.then((account) => {
				res.status(200).json(account);
			})
			.catch((err) => {
				res.status(500).json({
					error: err,
				});
			});
	})
	.delete((req, res, next) => {
		Account.remove({ _id: req.params.accountId })
			.exec()
			.then((result) => {
				res.status(200).json(result);
			});
	});

module.exports = professorRouter;
