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
	//delete an account with a specific id
	.delete((req, res, next) => {
		Account.remove({ _id: req.params.accountId })
			.exec()
			.then((result) => {
				res.status(200).json(result);
			});
	});
professorRouter
	.route('/:accountId/classes')
	//get all classes for the professor
	.get((req, res, next) => {
		classes.find({}, (err, classes) => {
			if (err) throw err;
			res.json(classes);
		});
		res.end();
	});
professorRouter
	.route('/:accountId/classes/:classId/')
	//get a specific class by ID
	.get((req, res, next) => {
	classes.find({}, (err, classes) => {
		if (err) throw err;
		res.json(classes);
	});
	res.end();
	})
	//create a new class with an ID
	.post((req, res, next) => {
	classes.create(req.body, (err, classes) => {
		if (err) throw err;

		console.log('Account Created');
	});
	res.end();
	});
professorRouter
	.route("/:accountI/classes/:classId/lessons")
	//get all lessons
	.get((req, res, next) => {
	lesson.find({}, (err, lesson) => {
		if (err) throw err;
		res.json(lesson);
	});
	res.end();
	})
professorRouter
	.route("/:accountI/classes/:classId/lessons/:lessonId/")
	//get a specific lesson
	.get((req, res, next) => {
		lesson.find({}, (err, lesson) => {
			if (err) throw err;
			res.json(lesson);
		});
		res.end();
		})
	//post a new lesson
	.post((req, res, next) => {
		lesson.create(req.body, (err, lesson) => {
			if (err) throw err;
			console.log("lesson Created");
		});
		res.end();
		})
		//update a lesson
	.put((req,res,next) => {
		lesson.findByIdAndUpdate(req.params.lessonId, {$set: req.body}, {new: true}, (err, lesson) => {
			if (err) throw err;
			res.json(lesson);
		});
		});
professorRouter
		.route("/:accountI/classes/:classId/lessons/:lessonId/records")
		//get all records
		.get((req, res, next) => {
	   record.find({}, (err, record) => {
			if (err) throw err;
			res.json (record);
		  });
		  res.end();
		})
professorRouter
		.route("/:accountI/classes/:classId/lessons/:lessonId/records/:recordId/")
		//update a record
	  	.put((req,res,next) => {
		record.findByIdAndUpdate(req.params.recordId, {$set: req.body}, {new: true}, (err, record) => {
		  if (err) throw err;
		  res.json(record);
		});
	  });
	  

module.exports = professorRouter;
