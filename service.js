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

    //$('#list').replaceWith("<div id='banner'><div class=\"jumbotron jumbotron-fluid\"> <div class=\"container\"><h1 class=\"display-4\">" + msg + "</h1></div></div></div>");
    $('#list').append("<li><div class=\"jumbotron jumbotron-fluid\"> <div class=\"container\"><h1 class=\"display-4\">" + msg + "</h1></div></div></li>");

    event.preventDefault();

})


var todoItem = "empty";

function getAllItems() {
    $.getJSON({

        url: '/index.html',
        success: function (data) {
            var list = [];
            console.log("success function called");
            $.each(data.docs, function (i, item) {
                list.push("<li>" + item.item + "</li>");
                todoList.push(item.item);
                todoItem = item.item;
                $('#list').html('<p> Name: ' + item.item + '</p>');                
            })
        }
    })
    console.log("getAllItems called");
    console.log(todoItem.toString())
}

function getList() {
	$.getJSON('result.json', function(jd) {
    	$('#list').html('<p> Name: ' + jd.name + '</p>');
    	$('#list').append('<p>Age : ' + jd.age+ '</p>');
    	$('#list').append('<p> Sex: ' + jd.sex+ '</p>');
    });
}

//getAllItems();

//getList();
