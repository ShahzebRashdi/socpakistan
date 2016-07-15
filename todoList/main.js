var listItems = [];

$("#add").click(function() {
    var newValue;
    newValue = $('#newtodo').val();
    if(newValue != "") {
      listItems.push(newValue);
      $('#newtodo').val('');
      renderJSON(listItems);
      save();
    }
});

function renderJSON(data) {
  $('#container').empty();
  for(i = 0; i < data.length; i++) {
    var valueToAdd = data[i];
    $('#container').append('<div id="'+valueToAdd+'"> <input type="checkbox" id="'+valueToAdd+'"> <span id="'+valueToAdd+'">'+ valueToAdd +'</span> <br> </div>');  
    $('#' + valueToAdd).on('click', function() {
        var myid=$(this).attr("id");
        //$(this).remove();
        //debugger;
        var index = listItems.indexOf(myid);
        if (index > -1) {
          listItems.splice(index, 1);
        }
        renderJSON(listItems);
        save();
    });
  }
}

function save() {
  //localStorage.myData = JSON.stringify(listItems);
  $.ajax({
      url: 'http://datastore.asadmemon.com/shahzeb', 
      type: 'POST', 
      contentType: 'application/json', 
      data: JSON.stringify(listItems),
      success:function(res){console.log(res);}
  });
}

function load() {
  //listItems = JSON.parse(localStorage.myData);
  $.get('http://datastore.asadmemon.com/shahzeb',function(res){
    console.log(res);
    listItems = res;
    renderJSON(listItems);
  });
}

load(); 