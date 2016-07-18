var msgs = [];
var username = "";
var timer;

function joinedAlert() {
	username = prompt("Please enter your name");
	msgs.push(username + ' has joined.');
	//renderJSON(msgs);
}

$("#send").click(function() {
    var newValue;
    newValue = username + ': ' + $('#newMsg').val();
    if(newValue != "") {
      msgs.push(newValue);
      $('#newMsg').val('');
      renderJSON(msgs);
      save();
    }
});

function renderJSON(data) {
	$('#chatwindow').val('');
	for(i = 0; i < data.length; i++) {
    	var msgToAdd = data[i];
    	$('#chatwindow').val($('#chatwindow').val() + msgToAdd + "\n");  	
  	}
}

function save() {
  $.ajax({
      url: 'http://datastore.asadmemon.com/socShahzeb', 
      type: 'POST', 
      contentType: 'application/json', 
      data: JSON.stringify(msgs),
      success:function(res){console.log(res);}
  });
}

function load() {
  $.get('http://datastore.asadmemon.com/socShahzeb',function(res){
    console.log(res);
    msgs = res;
    renderJSON(msgs);
    if(username == "") {
    	joinedAlert();
    }
  });
}

//function reload() {
//	timer = setInterval(load, 1000);
//}

load();
//reload();

$(document).ready(
   function(){
       setInterval(function(){
           load();
       },1000);
   });