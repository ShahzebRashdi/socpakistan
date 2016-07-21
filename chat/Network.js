var Network = function() {
}

Network.prototype.save = function(msgs) {
	$.ajax({
      url: 'http://datastore.asadmemon.com/soca', 
      type: 'POST', 
      contentType: 'application/json', 
      data: JSON.stringify(msgs),
      success:function(res){console.log(res);}
  });
}

Network.prototype.load = function(callback) {
	$.get('http://datastore.asadmemon.com/soca',function(res){
		callback(res);
    });
}