var Model = function() {
	this.msgs = [];
	this.username = "Shahzeb";
}

Model.prototype.updateArray = function(newMsgs) {
	if(newMsgs.push ){
		this.msgs = newMsgs;
	}
	
}

Model.prototype.pushMsg = function(msg) {
	this.msgs.push(msg);
}

Model.prototype.getMsgs = function() {
	return this.msgs;
}