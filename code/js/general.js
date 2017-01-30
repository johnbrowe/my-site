Vue.config.devtools = true;

window.Event = new Vue();

/**
 * Notes component
 */
Vue.component('note', {
    props: ['display', 'text'],
    
    template: '<div v-show="hide" @click="closeNote()"><p v-html="text"></p></div>',

    data: function(){
        return {
            hide: this.display
        }        
    },

    methods: {

        closeNote: function(){
            Event.$emit('close', { note: "" });
        }

    }


});


/**
 * Notes component
 */
Vue.component('notes', {

    props: ['display'],

    template: 
    '<ul v-show="display">' +
        '<li v-for="(note, index) in notes" @click="openNote(note)">' +
            '<div class="text" v-html="note" ></div>' +
        '</li>' +
    '</ul>',
    
    data: function(){
        return {
            notes: null,
            url: document.URL,
            display: this.display
        }    
    },

    created: function () {

        // Get notes
        this.ajax()
        
    },


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

        },

        openNote: function(note){
            Event.$emit('applied', { note: note });
        }
    
    }

});


/**
 * Vue Instance
 */
new Vue({

    el: '#notes',

    data: {
        showNotes: true,
        note: ""
    },

    created: function(){

        var that = this;

        Event.$on('applied', function(obj){
            that.showNotes = false;
            that.note = obj.note;
        });

        Event.$on('close', function(obj){
            that.showNotes = true;
            that.note = obj.note;
        });
    }

});