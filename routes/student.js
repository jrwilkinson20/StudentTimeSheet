var express = require('express');
var studentRouter = express.Router();
const mongoose = require('mongoose');
let Account = require('../Models/account');
let Class = require('../Models/class');
let Lesson = require('../Models/lesson');
let Record = require('../Models/record');

studentRouter
	.route('/')
	//Get all student accounts
	.get((req, res, next) => {
		Account.find({ account_type: 'STUDENT' })
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
	//Add a new student account
	.post((req, res, next) => {
		const account = new Account({
			_id: mongoose.Types._ObjectId,
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
			account_type: req.body.accountType,
			class: req.body.class,
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

studentRouter
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
	//Update an account with a specific ID
	.put((req, res, next) => {
		Account.remove({ _id: req.params.accountId });
		const account = new Account({
			_id: req.params.accountId,
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
			account_type: req.body.account_type,
			class: req.body.class,
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
	})
	.delete((req, res, next) => {
		Account.remove({ _id: req.params.accountId })
			.exec()
			.then((result) => {
				res.status(200).json(result);
			});
	});

studentRouter
	.route('/:accountId/classes/')
	//Get all classes
	.get();

studentRouter
	.route('/classes/:classId/')
	//Get a class with a specific ID
	.get();

studentRouter
	.route('/classes/:classId/lessons/')
	//Get all lessons
	.get();

studentRouter
	.route('/classes/:classId/lessons/:lessonId/')
	//Get a lesson with a specific ID
	.get();

studentRouter
	.route('/classes/:classId/lessons/:lessonId/records')
	//Get all records
	.get()
	//Post a new record
	.post();

studentRouter
	.route('/classes/:classId/lessons/:lessonId/records/:recordId')
	//Get a record with a specific ID
	.get()
	//Update a record with a specific ID
	.put();

module.exports = studentRouter;
