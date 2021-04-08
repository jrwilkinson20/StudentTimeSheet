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
	.get((req, res, next) => {
		classes.find({}, (err, classes) => {
			if (err) throw err;
			res.json(classes);
		});
		res.end();
	})
studentRouter
	.route('/classes/:classId/')
	//Get a class with a specific ID
	.route('/:id/classes/:class/')
	.get((req, res, next) => {
		classes.findById(req.params.classId, {$set: req.body}, (err, classes) => {
			if (err) throw err;
			res.json(classes);
		});
		res.end();
	})

studentRouter
	.route('/classes/:classId/lessons/')
	//Get all lessons
	.get((req, res, next) => {
		lesson.find({}, (err, lesson) => {
		  if (err) throw err;
		  res.json(lesson);
		});
		res.end();
	  })

studentRouter
	.route('/classes/:classId/lessons/:lessonId/')
	//Get a lesson with a specific ID
	.get((req, res, next) => {
		lesson.findById(req.params.lessonId, {$set: req.body}, (err, lesson) => {
		  if (err) throw err;
		  res.json(lesson);
		});
		res.end();
	  })

studentRouter
	.route('/classes/:classId/lessons/:lessonId/records')
	//Get all records
	.get((req, res, next) => {
		record.find({}, (err, record) => {
			 if (err) throw err;
			 res.json (record);
		   });
		   res.end();
		 })
	//Post a new record
	.post((req, res, next) => {
		record.create(req.body, (err, record) => {
			 if (err) throw err;
	   
			 console.log("Record Created");
		   });
		   res.end();
		 });

studentRouter
	.route('/classes/:classId/lessons/:lessonId/records/:recordId')
	//Get a record with a specific ID
	.get((req, res, next) => {
		record.findById(req.params.recordId, {$set: req.body}, (err, record) => {
			 if (err) throw err;
			 res.json (record);
		   });
		   res.end();
		 })
	//Update a record with a specific ID
	.put((req,res,next) => {
		record.findByIdAndUpdate(req.params.recordId, {$set: req.body}, {new: true}, (err, record) => {
		  if (err) throw err;
		  res.json(record);
		});
	  });

module.exports = studentRouter;
