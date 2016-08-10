var monk = require("monk");
var db = monk('localhost/MyDatabase');
var users = db.get("empUsers");

exports.findById = function(id, cb) {
  process.nextTick(function() {
    users.findOne({_id:id}, function(err, doc){
    if (!err)
        cb(null, doc);
    else
      cb(new Error('User ' + id + ' does not exist'));
    })
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    users.findOne({username:username}, function(err, doc){
    if (!err)
      cb(null, doc);
    else
      cb(null, null);
    })
  });
}

exports.setTodoListByUsername = function(username, list) {
  process.nextTick(function() {

    users.findOne({username:username}, function(err, doc){
      if (!err) {
       doc.todoList = list;
       users.update({username : username}, doc);
      }
    })

  });
}

exports.insertUser = function(username, password, displayname) {
  process.nextTick(function() {
    users.insert({ username : username , password: password, displayName: displayname, emails: [], todoList: []}, function (err, doc) {
      if(err) 
        return done(err);
        console.log("done",err,doc);
    });
  });
}
