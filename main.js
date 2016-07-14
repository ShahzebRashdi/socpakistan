var listItems = [];

$("#add").click(function() {
    var newValue;
    newValue = $('#newtodo').val();
    listItems.push(newValue);

    $('#newtodo').val('');
    $('#container').append('<div id="'+newValue+'"> <input type="checkbox" id="'+newValue+'"> <span id="'+newValue+'">'+ newValue +'</span> <br> </div>');
      
    $('#' + newValue).on('click', function() {
        $('#' + newValue).remove();
    });
});

function renderJSON(data) {
  $('#container').empty();
  for(i = 0; i < data.length; i++) {

  }
}


//	<script>
//      $("#add").click(function() {
        //newValue = document.getElementById("newtodo").value;
//        var newValue;
//        newValue = $('#newtodo').val();
        //document.getElementById("newtodo").value += newValue;
//        $('#newtodo').val('');
//        $('#container').append('<div id="'+newValue+'"> <input type="checkbox" id="'+newValue+'"> <span id="'+newValue+'">'+ newValue +'</span> <br> </div>');
      
//        $('#' + newValue).on('click', function() {
 //             $('#' + newValue).remove();
//        });


      //    $('#' + newValue).on('click', function() {
      //    $('#' + newValue).remove();
      //    $('span[id="'+newValue+'"]').remove();
      //  });
//      });
//    </script>