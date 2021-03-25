var Accounts = require('./Models/account');
var mongoose = require("mongoose");
var url =
  "mongodb+srv://jrwilkinson:158skunkJR21!@cluster0.c0anp.mongodb.net/StudentSheet?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser: true}, {useFindAndModify: false});

    const db = mongoose.connection;

   db.on("error", console.error.bind(console, "connection error"));

   db.once("open", ()=> {
       console.log("connected");
       Accounts.create({
        Username: 'Professor Something',
        Email: 'professorsomething@quinnipiac.edu',
        password: '123profsomething', 
        Account_type: 'Professor', 
        Class: 'CSC110'
    }), 
    (err,account) => {
        if(err) console.error(err);
        console.log(`account created: ${account}`);
    };
    });

  