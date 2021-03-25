var Accounts = require('./Models/account');
var Classes = require('./Models/class');
var Lessons = require('./Models/lesson');
var Records = require('./Models/record');
var mongoose = require("mongoose");
var uri =
  "mongodb+srv://dbuser:158skunkJR21!@cluster0.c0anp.mongodb.net/StudentSheet?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser: true}, {useFindAndModify: false});

    const db = mongoose.connection;

   db.on("error", console.error.bind(console, "connection error"));

   db.once("open", ()=> {
       console.log("connected");
        Accounts.create({
            username: 'Professor Something',
            email: 'professorsomething@quinnipiac.edu',
            password: '123profsomething', 
            account_type: 'Professor', 
            class: 'CLASS'
        });
        Classes.create({
            name: "SER330",
            lesson: "LESSON[]",
            class_code: "648-490-555"
        });
        Lessons.create({
            name: "LESSON",
            record: "RECORD[]",
            due_date: new Date('December 17, 1995 03:24:00')
        });
        Records.create({
            type: "ENUM",
            minutes: 20
        })
    , 
    (err,account) => {
        if(err) console.error(err);
        console.log(`account created: ${account}`);
    };
});

  