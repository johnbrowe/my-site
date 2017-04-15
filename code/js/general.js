import Vue from "vue"

Vue.config.devtools = true;

window.Event = new Vue();

var store = {
    showModal: false,
    note: null
}

/**
 * Notes component
 */
Vue.component('note', {

    props: ['text'],
    
    template:
        `<div class="modal" :class="{ active: store.showModal }">
            <div v-if="store.note" class="modal__box">
                <a @click="closeModal" title="Close" class="close">X</a>
                <div v-html="store.note"></div>
            </div>
          </div>`,
    
    data () {
        return {
            store: store
        }        
    },

    methods: {
        closeModal () {
            this.store.showModal = false;
            this.store.note = null;
        }
    }

});


/**
 * Notes component
 */
Vue.component('notes', {
    template: 
    '<ul class="notes__list">' +
        '<li class="notes__list__items" v-for="(note, index) in notes" @click="openModal(note)">' +
            '<div class="text" v-html="note" ></div>' +
        '</li>' +
    '</ul>',
    
    data () {
        return {
            notes: null,
            url: document.URL,
            store: store
        }    
    },

    created () {
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

        openModal (note) {
            console.log(note);
            this.store.note = note;
            this.store.showModal = true;
        }
    
    }

});


/**
 * Vue Instance
 */
new Vue({

    el: '#notes',

    data: {
        note: ""
    }
});
