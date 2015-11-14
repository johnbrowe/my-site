new Vue({
    el: '#notes',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue.js' },
            { text: 'Build Something Awesome' }
        ],
        message: "hello",
        notes: null

    },

    created: function () {

        // Get notes
        this.fetchData()

    },

    filters: {},

    methods: {

        fetchData: function () {

            // This for nested functions
            var self = this;

            // Get notes via ajax
            $.ajax({
                url: "notes",
                context: document.body
            }).done(function (data) {

                // Add json to data
                self.notes = data;
                console.log(self.notes);
            });

        }

    }

});

/**
 * General.js
 * Custom JavScript
 */
/*
new Vue({

    el: '#notes',

    data: {

        message: "hello",
        notes: null

    },

    created: function () {

        // Get notes
        this.fetchData()

    },

    filters: {},

    methods: {
        fetchData: function () {

            // This for nested functions
            var self = this;

            // Get notes via ajax
            $.ajax({
                url: "notes",
                context: document.body
            }).done(function (data) {

                // Add json to data
                self.notes = data;
                console.log(self.notes);
            });

        }
    }

});
*/
//$.ajax({
//    url: "notes",
//    context: document.body
//}).done(function(data) {
//
//
//    for (var key in data) {
//        data[key].forEach(function(data){
//            console.log(data);
//            $('body').append(data);
//
//        });
//    }
//
//});