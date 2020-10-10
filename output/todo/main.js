(function () {
  "use strict";

  const app = new Vue({
    el: "#app",
    data: {
      title: 'my todos',
      addItems: '',
      todos: [],
      modify: false,
      modifyItmes: '',
    },
    methods: {
      insertTodo: function(){
        let d = new Date();
        let date =  d.getFullYear() + "/" + (d.getMonth()+ 1) + "/" + d.getDate();

        if(this.addItems !== ''){
          var items = {
            task: this.addItems,
            done: false,
            date: date,
            modify: false,
          }
          this.todos.push(items);
          this.addItems = '';
        }else{
          alert('タスクを入力してください');
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

        this.todos[index].modify = true;
        this.modifyItems = this.todos[index].task;
      },
      modifyTodo: function(index){
        if(this.modifyItems !== ''){
          var items = {
            task: this.modifyItems,
            done: false,
            date: this.todos[index].date,
            modify: false,
          }
          this.index.map(newTodo => {
            return items;
          });
        }else{
          alert('タスクを入力してください');
        }
      }
    },
  });
})();
