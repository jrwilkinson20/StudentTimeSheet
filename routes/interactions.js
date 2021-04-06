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
	.get((req, res, next) => {
		accounts.find({}, (err, account) => {
			if (err) throw err;
			res.json(account);
		});
		res.end();
	})
	.post((req, res, next) => {
		accounts.create(req.body, (err, account) => {
			if (err) throw err;
			console.log('Account Created');
		});
		res.end();
	});

// /accounts/ACCOUNTID
interactionsRouter.route('/accountId').put((req, res, next) => {
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
interactionsRouter.route('/:accountId/classes/').get((req, res, next) => {
	accounts.findById(req.params.accountId, (err, account) => {
		if (err) throw err;
		res.json(account.class);
	});
	res.end();
});

// /accounts/ACCOUNTID/classes/ClassID/
interactionsRouter
	.route('/:accountId/classes/:classId/')
	.get((req, res, next) => {
		accounts.findById(req.params.accountId, (err, account) => {
			if (err) throw err;
			account.findById(req.params.classId, (err, clas) => {
				if (err) throw err;
				res.json(account.clas.id(req.params.classId));
			});
		});
		res.end();
	})
	.post((req, res, next) => {
		classes.create(req.body, (err, classes) => {
			if (err) throw err;

			console.log('Account Created');
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
