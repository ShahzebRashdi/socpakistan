var users = [];

var Username = function(firstName, lastName, email, password, joinAs, comment) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
	this.joinAs = joinAs;
	this.comment = comment;
	this.health = 100;
}

Username.prototype.checkUser = function(email, password) {
	if(this.email == email && this.password == password) {
		return true;
	}
	else {
		return false;
	}
}

Username.prototype.punchUser = function() {
	this.health-=5;
}

function updateHealth() {
	$('#health').empty();
	for(x = 0 ; x < users.length ; x++) {
		var healthChar = "";
		for(y = 0; y < users[x].health ; y+=5) {
			healthChar = healthChar + "*";
		}
		healthChar = healthChar + "[" + users[x].health + "]";
		var userName = users[x].firstName;
		
		$('#health').append('<span class="required">' + userName + ': ' + healthChar + '</span> <br>');
	}
}

$("#submit").click(function(e) {
	e.preventDefault();
	var fname = $('#fName').val();
	var lname = $('#lName').val();
	var userEmail = $('#email').val();
	var password = $('#password').val();
	var joinOption = $('#join option:selected').text();
	var comment = $('#comment').val();
	
	var user = new Username(fname, lname, userEmail, password, joinOption,comment);
	users.push(user);
});

$("#signinButton").click(function(e) {
	e.preventDefault();
	var userEmail = $('#userEmail').val();
	var userPassword = $('#userPassword').val();
	for(x=0; x<users.length; x++) {
		if(users[x].checkUser(userEmail, userPassword)) {
			alert("welcome");
		}
	}
});

$(document).ready (
	function() {
		setInterval(function() {
			updateHealth();
		},1000);
	});