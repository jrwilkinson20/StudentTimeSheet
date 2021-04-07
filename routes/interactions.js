var express = require('express');
var interactionsRouter = express.Router();
let accounts = require('../Models/account');
const mongoose = require('mongoose');

// /accounts
// Accounts
interactionsRouter
	.route('/')
	//Get all accounts
	.get((req, res, next) => {
		accounts.find({}, (err, account) => {
			if (err) throw err;
			res.json(account);
		});
	})
	//Insert account
	.post((req, res, next) => {
		accounts.create(req.body, (err, account) => {
			if (err) throw err;
			console.log('Account Created with id: ' + account._id);
		});
		res.end();
	});

//AccountId parameter
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
	})
	//Create a new class
	.post((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.class.push(req.body);
			account.save((err, account) => {
				if (err) throw err;
				res.json(account);
			});
			console.log('Class Created');
		});
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
	});

// /accounts/ACCOUNTID/classes/CLASSID/lessons
// Lessons for a given account id
interactionsRouter
	.route('/:accountId/classes/:classId/lessons')
	//Get all Lessons for given account id
	.get((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			res.json(account.class.id(req.params.classId).lesson);
		});
	})
	//Create a new Lesson
	.post((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.class.id(req.params.classId).lesson.push(req.body);
			account.save((err, account) => {
				if (err) throw err;
				res.json(account);
			});
			console.log('Lesson Created');
		});
	});

// account/ACCOUNTID/classes/CLASSID/lessons/LESSONID/
interactionsRouter
	.route('/:accountId/classes/:classId/lessons/:lessonId')
	.get((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			res.json(
				account.class
					.id(req.params.classId)
					.lesson.id(req.params.lessonId)
			);
		});
	})
	.post((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.class.id(req.params.classId).lesson.push(req.body);
			account.save((err, account) => {
				if (err) throw err;
				res.json(account);
			});
			console.log('Lesson Created');
		});
	})
	.put((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.class
				.id(req.params.classId)
				.lesson.id(req.params.lessonId)
				.remove(); //remove the lesson
			account.class.id(req.params.classId).lesson.push(req.body); //add the updated lesson
			//save the account
			account.save((err, account) => {
				if (err) throw err;
				res.json(account);
			});
			console.log('Lesson updated');
		});
	});

// accounts/ACCOUNTID/classes/CLASSID/lessons/LESSONID/records
interactionsRouter
	.route('/classes/:classId/lessonsrecords/') //prof 
	.get((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			res.json(
				account.class
					.id(req.params.classId)
					.lesson.id(req.params.lessonId).record
			);
		});
	})
	.post((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.class
				.id(req.params.classId)
				.lesson.id(req.params.lessonId)
				.record.push(req.body);
			account.save((err, account) => {
				if (err) throw err;
				res.json(account);
			});
			console.log('Record Created');
		});
	});

// /accounts/ACCOUNTID/classes/CLASSID/lessons/LESSONID/records/RECORDID
interactionsRouter
	.route('/:id/classes/:classId/lessonsrecords/')
	.get((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			res.json(
				account.class
					.id(req.params.classId)
					.lesson.id(req.params.lessonId)
					.record.id(req.params.recordId)
			);
		});
	})
	.put((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.class
				.id(req.params.classId)
				.lesson.id(req.params.lessonId)
				.record.id(req.params.recordId)
				.remove(); //remove the record
			account.class
				.id(req.params.classId)
				.lesson.id(req.params.lessonId)
				.record.push(req.body); //add the updated record
			//save the account
			account.save((err, account) => {
				if (err) throw err;
				res.json(account);
			});
			console.log('Lesson updated');
		});
	});

module.exports = interactionsRouter;
