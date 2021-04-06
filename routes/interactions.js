var express = require('express');
var interactionsRouter = express.Router();
let accounts = require('../Models/account');
let classes = require('../Models/class');
let lessons = require('../Models/lesson');
let records = require('../Models/record');
const mongoose = require('mongoose');

// /accounts
// Accounts
interactionsRouter
	.route('/')
	.all((req, res, next) => {
		next();
	})
	//Get all accounts
	.get((req, res, next) => {
		accounts.find({}, (err, account) => {
			if (err) throw err;
			res.json(account);
		});
		res.end();
	})
	//Insert account
	.post((req, res, next) => {
		accounts.create(req.body, (err, account) => {
			if (err) throw err;
			console.log('Account Created with id: ' + account._id);
		});
		res.end();
	});

//AccountId
// /accounts/ACCOUNTID
interactionsRouter
	.route('/:accountId')
	// update account
	.put((req, res, next) => {
		accounts.findByIdAndUpdate(
			req.params.accountId,
			{ $set: req.body },
			{ new: true },
			(err, account) => {
				if (err) throw err;
				res.json(account);
			}
		);
		res.end();
	});

// /accounts/ACCOUNTID/classes/
// Classes for a given account id
interactionsRouter
	.route('/:accountId/classes/')
	//Get all classes for given account id
	.get((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			res.json(account.class);
		});
		res.end();
	});

//Class Ids
// /accounts/ACCOUNTID/classes/ClassID/
interactionsRouter
	.route('/:accountId/classes/:classId/')
	//get specific classId
	.get((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			res.json(account.class.id(req.params.classId));
		});
		res.end();
	})
	//Create a new class with id ClassId
	.post((req, res, next) => {
		classes.create(req.body, (err, classes) => {
			if (err) throw err;
			accounts.class.push(req.body);
			accounts.save((err, account) => {
				if (err) throw err;
				res.json(account);
			});
			console.log('Class Created');
		});
		res.end();
	});

// account/ACCOUNTID/classes/CLASSID/lessons/LESSONID/
interactionsRouter
	.route('/:accountId/classes/:classId/lessons/:lessonId')
	.get((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.findById(req.params.classId, (err, clas) => {
				if (err) throw err;
				clas.findById(req.params.lessonId),
					(err, lesson) => {
						if (err) throw err;
						res.json(
							account.clas.lesson.id(req.params.lessonId)
						);
					};
			});
		});
		res.end();
	})
	.post((req, res, next) => {
		lesson.create(req.body, (err, lesson) => {
			if (err) throw err;

			console.log('lesson Created');
		});
		res.end();
	})
	.put((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.findById(req.params.classId, (err, clas) => {
				if (err) throw err;
				clas.findById(req.params.lessonId),
					(err, lesson) => {
						if (err) throw err;
						lesson.findByIdAndUpdate(
							req.params.lessonId,
							{ $set: req.body },
							{ new: true },
							(err, lesson) => {
								if (err) throw err;
								res.json(lesson);
							}
						);
					};
			});
		});
		res.end();
	});

// accounts/ACCOUNTID/classes/CLASSID/lessons/LESSONID/records
interactionsRouter
	.route('/:accountId/classes/:classId/lessons/:lessonId/records/')
	.all((req, res, next) => {
		next();
	})
	.get((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.findById(req.params.classId, (err, clas) => {
				if (err) throw err;
				clas.findById(req.params.lessonId),
					(err, lesson) => {
						if (err) throw err;
						res.json(account.clas.lesson.record);
					};
			});
		});
		res.end();
	})
	.post((req, res, next) => {
		record.create(req.body, (err, record) => {
			if (err) throw err;

			console.log('Record Created');
		});
		res.end();
	});

// /accounts/ACCOUNTID/classes/CLASSID/lessons/LESSONID/records/RECORDID
interactionsRouter
	.route('/:id/classes/:classId/lessons/:lesson/records/:recordId')
	.put((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.findById(req.params.classId, (err, clas) => {
				if (err) throw err;
				clas.findById(req.params.lessonId),
					(err, lesson) => {
						if (err) throw err;
						record.findByIdAndUpdate(
							req.params.recordId,
							{ $set: req.body },
							{ new: true },
							(err, record) => {
								if (err) throw err;
								res.json(record);
							}
						);
					};
			});
		});
		res.end();
	});

module.exports = interactionsRouter;
