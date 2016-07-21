var ref = firebase.database().ref('/topics');
var topicSelected = "";

ref.on('child_added',function(snapshot){
	var topicTitle = snapshot.val().title;
	var topicUser = snapshot.val().username;
	var topicDate = new Date(snapshot.val().date);
    $('#alltopics tbody').append('<tr id="'+ snapshot.key +'"><td>'+ topicTitle +'</td> <td>'+ topicUser +'</td> <td>'+ topicDate + '</td> <td><a class="btn btn-default" href="topicspage.html#key='+ snapshot.key +'" role="button">OPEN</a> </td> <td> <button id="'+ snapshot.key +'" class="btn btn-default" type="submit" data-toggle="modal" data-target="#deleteModal">DELETE</button> </td> </tr>');

    $('#' + snapshot.key).on('click', function() {
    	topicSelected = snapshot.key;
    });
});

$("#publish").click(function() {
    var obj = {
		"title":$("#title").val(),
		"username":$("#user").val(),
		"date": Date.now(),
		"comments" : {

		}
	}
	$("#title").val('');
	$("#user").val('');
	ref.push(obj);
});

$("#delete").click(function() {
	var topicRef = firebase.database().ref('/topics/' + topicSelected);
	topicRef.remove();
	$('#' + topicSelected).remove();
});