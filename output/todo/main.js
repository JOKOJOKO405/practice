(function () {
  "use strict";

  const app = new Vue({
    el: "#app",
    data: {
      title: 'my todos',
      addItems: '',
      todos: [],
      modify: false,
      taskIndex: '',
    },
    methods: {
      insertTodo: function(){
        let d = new Date();
        let date =  d.getFullYear() + "/" + (d.getMonth()+ 1) + "/" + d.getDate();

        if(!this.modify){
          if(this.addItems !== ''){
            var items = {
              task: this.addItems,
              done: false,
              date: date,
            }
            this.todos.push(items);
            this.addItems = '';
          }else{
            alert('タスクを入力してください');
          }
        }else{
          if(this.addItems !== ''){
            this.todos[this.taskIndex].task = this.addItems;
            this.addItems = '';
            this.modify = false;
          }else{
            alert('タスクを入力してください');
          }
        }
        
      },
      deleteTodo: function(index){
        if(!this.todos[index].done){
          alert('まだ終わってないよ！');
        }else{
          this.todos.splice(index, 1);
        }
      },
      modifyShow: function(index){
        this.modify = true;
        this.addItems = this.todos[index].task;
        this.taskIndex = index;
      },
    },
  });
})();
