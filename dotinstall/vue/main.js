(function(){
  'use strict';

  var vn = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [{
        title: 'task1',
        isDone: false,
      },{
        title: 'task2',
        isDone: false,
      },{
        title: 'task3',
        isDone: true,
      }
    ]
    },
    methods: {
      addItem: function() {
        var item = {
          title: this.newItem,
          isDone: false,
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if(confirm('surely?')){
          this.todos.splice(index, 1);
        }
      }
    },
    computed: {
      remaining: function() {
        var item = this.todos.filter(function(todo){
          return !todo.isDone;
        });
        return item.length;
      }
    }
  });


})();

