new Vue({

    el: '#notes',

    data: {

        notes: null

    },

    created: function () {

        // Get notes
        this.fetchData()
        console.log(this.notes);
    },

    filters: {},

    methods: {

        /**
         * Get notes from JSON API
         */

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
