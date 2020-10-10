(function () {
  "use strict";

  const app = new Vue({
    el: "#app",
    data: {
      title: 'my todos',
      addItems: '',
      todos: [],
    },
    methods: {
      insertTodo: function(){
        let d = new Date();
        let date =  d.getFullYear() + "/" + (d.getMonth()+ 1) + "/" + d.getDate();

        var items = {
          task: this.addItems,
          done: false,
          date: date,
        }
        this.todos.push(items);

        this.addItems = '';
      }
    },
  });
})();
