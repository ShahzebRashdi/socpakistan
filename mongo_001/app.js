var monk = require("monk");
var db = monk('localhost/MyDatabase');
var users = db.get("users");


users.insert({ Name : "Zeeshan" , Age: 10, Position: "Manager"}, function (err, doc) {
    if(err) return done(err);
    console.log("done",err,doc);
});


/*users.findOne({:"m"}, function(err, doc){
    if (!err)
        console.log(doc);
    else
        console.log("errrr",err);
})*/