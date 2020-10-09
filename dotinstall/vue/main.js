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
    watch: {
      // todos: function (){
      //   localStorage.setItem('todos', JSON.stringify(this.todos));
      //   console.log('data changed');
      // }
      todos: {
        handler: function(){
          localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true,
      }
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
      },
      purge: function() {
        if(!confirm('finished?')){
          return;
        }
        this.todos = this.remaining;
      }
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(todo){
          return !todo.isDone;
        });
      }
    }
  });


})();

