/**
 * General.js
 * Custom JavScript
 */

new Vue({

    el: '#task',

    data: {
        tasks: [
            { body: 'go to store', completed: false }
        ],
        newTask: ''
    },

    computed: {
      completions: function () {
          return this.tasks.filter(function (task) {
              return task.completed
          });
      }
    },

    filters: {

        notDone: function (tasks) {
            return tasks.filter(function (task) {
                return !task.completed;
            });
        },
        done: function (tasks) {
            return tasks.filter(function (task) {
                return task.completed;
            });
        }

    },

    methods: {

        addTask: function (e) {

            e.preventDefault();

            this.tasks.push({
                body: this.newTask,
                completed: false
            });

            this.newTask = '';

        },

        editTask: function (task) {

            this.removeTask(task);

            this.newTask = task.body;

            this.$$.newTask.focus();

        },

        completeTask: function (task) {

            task.completed = true;


            console.log(this);
        },

        removeTask: function (task) {

            this.tasks.$remove(task);

        }

    }

});

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