new Vue({

    el: '#notes',

    data: {

        notes: null

    },

    created: function () {

        // Get notes
        this.ajax()
        
    },

    filters: {},

    methods: {

        /**
         * Get notes from JSON API
         */
        ajax: function() {
            // This for nested functions
            var self = this;

            var request = new XMLHttpRequest();
    
            request.open('GET', '/notes', true);

            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {            
    
                    // Success!
                    var resp = request.responseText;
    
                    // Add json to data
                    self.notes = JSON.parse(resp);
                    console.dir(self.notes);
                        
                } else {
                    // We reached our target server, but it returned an error
                }
            };

            request.onerror = function(e) {
                // There was a connection error of some sort
                console.log(e);
            };

            request.send();

        }
    
    }

});
