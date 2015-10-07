$.ajax({
    url: "notes",
    context: document.body
}).done(function(data) {


    for (var key in data) {
        data[key].forEach(function(data){
            console.log(data);
            $('body').append(data);

        });
    }

});