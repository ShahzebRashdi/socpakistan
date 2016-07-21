var hash;
hash = window.location.hash;
hash = hash.replace("#key=", "");
var individualTopicRef = firebase.database().ref('/topics/' + hash + "/comments/");
var topicRef = firebase.database().ref('/topics/' + hash);

topicRef.on('value', function(snapshot) {
	$('#topictitle').append(snapshot.val().title);
});

individualTopicRef.on('child_added', function(snapshot) {
	$('#thetopic').append(snapshot.val() + "<br>");
});

$("#add").click(function() {
	var newComment = $("#user").val() + ":" + $("#comments").val();
	$("#user").val('');
	$("#comments").val('');
	individualTopicRef.push(newComment);
});
