var username = "";
var ref = firebase.database().ref('/msgs');

function joinedAlert() {
	username = prompt("Please enter your name");
	ref.push(username + ' has joined.');
}

joinedAlert();

ref.on('child_added',function(snapshot){
    $('#chatwindow').append(snapshot.val() + "\n");
});

$("#send").click(function() {
    var newValue;
    newValue = username + ': ' + $('#newMsg').val();
    if(newValue != "") {
    	$('#newMsg').val('');
    	ref.push(newValue);
    }
});