//Timothy Carta, Victoria Gorski, Julia Wilkinson
var Accounts = require('./Models/account');
var Classes = require('./Models/class');
var Lessons = require('./Models/lesson');
var Records = require('./Models/record');
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const accountEnum = {"Professor":1, "Student":2};
const recordEnum = {"Homework":1, "Exam Prep":2, "Studying":3};
var uri = "mongodb+srv://dbuser:158skunkJR21!@cluster0.c0anp.mongodb.net/StudentSheet?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser: true}, {useFindAndModify: false});

    const db = mongoose.connection;

   db.on("error", console.error.bind(console, "connection error"));

   db.once("open", ()=> {
       console.log("connected");
        Accounts.create({ // Test Accounts model
            username: 'Professor Something',
            email: 'professorsomething@quinnipiac.edu',
            password: '123profsomething', 
            account_type: "Professor", 
            class: mongoose.Types.ObjectId("605cdd6b680b8536082a5eb2"),
        });
        Classes.create({ //Test Classes Model
            name: "SER330",
            lesson: mongoose.Types.ObjectId("605cdd6b680b8536082a5eb3"),
            class_code: "648-490-555"
        });
        Lessons.create({ //Test Lessons Model
            name: "Lesson01",
            record: mongoose.Types.ObjectId("605cdd6b680b8536082a5eb4"),
            due_date: new Date('December 17, 1995 03:24:00')
        });
        Records.create({ //Test Records Model
            type: "Homework",
            minutes: 60
        })
    , 
    (err,account) => {
        if(err) console.error(err);
        console.log(`account created: ${account}`);
    };
});

  