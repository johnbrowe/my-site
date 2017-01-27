Vue.component('note', {
    template: '<li>A custom component!</li>'
});

Vue.component('notes', {
    template: '<ul>' +
        '<li v-for="(note, index) in notes">' +
            '<div class="text" v-html="note" ></div>' +
            '<div class="overlay"><a v-bind:href="url + index"> Read more</a></div>' +
        '</li>' +
    '</ul>',
    
    data: function(){
        return {
            notes: null,
            url: document.URL,
        }    
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

new Vue({

    el: '#notes',

});