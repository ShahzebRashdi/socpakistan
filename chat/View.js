var View = function(newMsgCallback) {
	$("#send").click(function() {
    	var newValue;
    	newValue =  'Shahzeb : ' + $('#newMsg').val();
   		if(newValue != "") {
	    	$('#newMsg').val('');
    		newMsgCallback(newValue);
    	}
	});
}

View.prototype.renderJSON = function(data) {
	$('#chatwindow').val('');
	for(i = 0; i < data.length; i++) {
    	var msgToAdd = data[i];
    	$('#chatwindow').val($('#chatwindow').val() + msgToAdd + "\n");  	
  	}
}