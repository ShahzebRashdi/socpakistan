var Controller = function() { 
	this.network = new Network();
	this.model = new Model();
	this.view = new View(this.handleNewMsg.bind(this));

	this.network.load(function(res) {
		this.model.updateArray(res);
		this.view.renderJSON(res);
	}.bind(this));
}

Controller.prototype.handleNewMsg = function(msg) {
	this.model.pushMsg(msg);
	this.network.save(this.model.getMsgs());
	this.view.renderJSON(this.model.getMsgs());
}

var control = new Controller();