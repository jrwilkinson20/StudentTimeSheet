var Accounts = require('./Models/account');
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
        class: 'CSC110'
    }), 
    (err,account) => {
        if(err) console.error(err);
        console.log(`account created: ${account}`);
    };
});

  