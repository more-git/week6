
$('#some-form').submit(function () {
    $.post({
        url: '/save',
        data: JSON.stringify({"thing": $('#some-input').val()}),
        dataType: 'json'
    })
})

function getAllItems() {
    $.getJSON({
        url: '/list',
        success: function (data) {
            var list = [];
            $.each(data.docs, function (i, item) {
                list.push("<li>" + item.item + "</li>");
            })

            $("<ul>", {
                html: list.join("")
            }).appendTo("#list");
        }
    })
}

getAllItems();


