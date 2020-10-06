$('#todo-form').submit(function () {
	var msg = $('#todo-input').val();
    var formData = {
        'message'     : msg,
    };

    $.post({
        url: '/',
        data: JSON.stringify({"item": $('#todo-input').val()}),
        dataType: 'json'
    })
    $('#list').append("<li><div class=\"jumbotron jumbotron-fluid\"> <div class=\"container\"><h1 class=\"display-4\">" + msg + "</h1></div></div></li>");
    event.preventDefault();
})


var todoItem = "empty";
getTasksDone();

function getTasksDone() {
    $.getJSON({ url: './list',
        success: function (data) {

            var list = [];
            var responseArray = JSON.stringify(data).split("something");
            for (var i = 1; i < responseArray.length; i++) {
                var cut = responseArray[i].substring(3,responseArray[i].length);
                var task = cut.substring(0,cut.indexOf('"'));
                $('#list').append("<li><div class=\"jumbotron jumbotron-fluid\"> <div class=\"container\"><h1 class=\"display-4\">" + task + "</h1></div></div></li>");
            }
            /*
            $.each(data.docs, function (i, item) {
                list.push("<li>" + item.item + "</li>");
                todoList.push(item.item);
                todoItem = item.item;
                $('#list').html('<p> Name: ' + item.item + '</p>');                
            })*/
        }

    }).done(function() {
        
    }).fail(function( data ) {
        if (data) {
            var responseArray = JSON.stringify(data).split("something");
            for (var i = 1; i < responseArray.length; i++) {
                var cut = responseArray[i].substring(3,responseArray[i].length);
                var task = cut.substring(0,cut.indexOf("'"));
                $('#list').append("<li><div class=\"jumbotron jumbotron-fluid\"> <div class=\"container\"><h1 class=\"display-4\">" + task + "</h1></div></div></li>");


            }
        }
    });
}


